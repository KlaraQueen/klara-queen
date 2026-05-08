import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
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
