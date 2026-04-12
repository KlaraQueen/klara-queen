import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  getDocs,
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
    const snap = await getDocs(collection(db, "users", uid, "orders"));
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return sortByTimeDesc(list, "createdAt");
  } catch {
    return [];
  }
}

export async function fetchUserInvoices(uid) {
  if (!db) {
    return [];
  }
  try {
    const snap = await getDocs(collection(db, "users", uid, "invoices"));
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return sortByTimeDesc(list, "issuedAt");
  } catch {
    return [];
  }
}
