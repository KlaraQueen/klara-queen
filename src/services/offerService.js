import { db, storage } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const COL = "offers";

export async function fetchOffers() {
  if (!db) return [];
  try {
    const q = query(collection(db, COL), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch {
    const snap = await getDocs(collection(db, COL));
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    list.sort((a, b) => {
      const ta = a.createdAt?.seconds ?? a.createdAt ?? 0;
      const tb = b.createdAt?.seconds ?? b.createdAt ?? 0;
      return tb - ta;
    });
    return list;
  }
}

export async function fetchOffer(id) {
  if (!db) return null;
  const snap = await getDoc(doc(db, COL, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function createOffer(data) {
  if (!db) throw new Error("Firestore niedostępny");
  const docRef = await addDoc(collection(db, COL), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateOffer(id, data) {
  if (!db) throw new Error("Firestore niedostępny");
  await updateDoc(doc(db, COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function removeOffer(id) {
  if (!db) throw new Error("Firestore niedostępny");
  await deleteDoc(doc(db, COL, id));
}

export async function uploadOfferImage(file, folder) {
  if (!storage) throw new Error("Storage niedostępny");
  const name = `${Date.now()}_${file.name}`;
  const storageRef = ref(storage, `offers/${folder}/${name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteOfferImage(url) {
  if (!storage) return;
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch (_) {}
}
