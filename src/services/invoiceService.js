import { db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const COL = "invoices";

export async function fetchInvoices() {
  if (!db) return [];
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function fetchInvoice(id) {
  if (!db) return null;
  const snap = await getDoc(doc(db, COL, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function createInvoice(data) {
  if (!db) throw new Error("Firestore niedostępny");
  const docRef = await addDoc(collection(db, COL), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateInvoice(id, data) {
  if (!db) throw new Error("Firestore niedostępny");
  await updateDoc(doc(db, COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/** Ujednolica `customerEmail` (trim + małe litery) na wszystkich fakturach, gdzie pole się zmieni. */
export async function normalizeAllInvoiceCustomerEmails() {
  if (!db) throw new Error("Firestore niedostępny");
  const list = await fetchInvoices();
  let updated = 0;
  let skipped = 0;
  for (const inv of list) {
    const raw = inv.customerEmail;
    if (typeof raw !== "string") {
      skipped++;
      continue;
    }
    const norm = raw.trim().toLowerCase();
    if (!norm || norm === raw) {
      skipped++;
      continue;
    }
    await updateInvoice(inv.id, { customerEmail: norm });
    updated++;
  }
  return { updated, skipped };
}
