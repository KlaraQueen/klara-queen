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
  const docRef = await addDoc(collection(db, COL), {
    ...data,
    status: "nowe",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateOrder(id, data) {
  if (!db) throw new Error("Firestore niedostępny");
  await updateDoc(doc(db, COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}
