import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const userDocRef = (uid) => doc(db, "users", uid);

export async function fetchUserProfile(uid) {
  if (!db) {
    return null;
  }
  const snap = await getDoc(userDocRef(uid));
  if (!snap.exists()) {
    return null;
  }
  return snap.data();
}

export async function saveUserProfile(uid, data) {
  if (!db) {
    throw new Error("Firestore niedostępny");
  }
  await setDoc(
    userDocRef(uid),
    {
      ...data,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

function sortByTimeDesc(list, field) {
  return [...list].sort((a, b) => {
    const ta = a[field]?.seconds ?? a[field] ?? 0;
    const tb = b[field]?.seconds ?? b[field] ?? 0;
    return tb - ta;
  });
}

export async function fetchUserOrders(uid) {
  if (!db) {
    return [];
  }
  try {
    const q = query(collection(db, "orders"), where("userId", "==", uid));
    const snap = await getDocs(q);
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return sortByTimeDesc(list, "createdAt");
  } catch {
    return [];
  }
}

function emailQueryVariants(email) {
  if (!email || typeof email !== "string") {
    return [];
  }
  const t = email.trim();
  if (!t) {
    return [];
  }
  const lower = t.toLowerCase();
  return lower === t ? [t] : [t, lower];
}

/** Faktury z kolekcji `invoices` (ta sama co w panelu admina), dopasowanie po userId lub customerEmail. */
export async function fetchUserInvoices(uid, authEmail) {
  if (!db) {
    return [];
  }
  try {
    const col = collection(db, "invoices");
    const merged = new Map();

    const byUid = await getDocs(query(col, where("userId", "==", uid)));
    byUid.docs.forEach((d) =>
      merged.set(d.id, { id: d.id, ...d.data() }),
    );

    for (const em of emailQueryVariants(authEmail)) {
      const byEmail = await getDocs(query(col, where("customerEmail", "==", em)));
      byEmail.docs.forEach((d) =>
        merged.set(d.id, { id: d.id, ...d.data() }),
      );
    }

    const list = [...merged.values()];
    return sortByTimeDesc(list, "issuedAt");
  } catch {
    return [];
  }
}
