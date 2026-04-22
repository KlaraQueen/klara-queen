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

const COL = "orders";

function buildOrderNumber(docId) {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const suffix = docId
    ? String(docId).slice(-4).toUpperCase()
    : String(Math.floor(1000 + Math.random() * 9000));
  return `KQ/${yyyy}/${mm}${dd}/${suffix}`;
}

export async function fetchOrders() {
  if (!db) return [];
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function fetchOrder(id) {
  if (!db) return null;
  const snap = await getDoc(doc(db, COL, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function createOrder(data) {
  if (!db) throw new Error("Firestore niedostępny");
  const payload = {
    ...data,
    status: data?.status || "nowe",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, COL), payload);
  const orderNumber = buildOrderNumber(docRef.id);
  await updateDoc(doc(db, COL, docRef.id), {
    orderNumber,
    updatedAt: serverTimestamp(),
  });

  return { id: docRef.id, orderNumber };
}

export async function updateOrder(id, data) {
  if (!db) throw new Error("Firestore niedostępny");
  await updateDoc(doc(db, COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}
