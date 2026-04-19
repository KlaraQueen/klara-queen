import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig, isFirebaseConfigReady } from "./config";

function getOrInitApp() {
  if (!isFirebaseConfigReady()) {
    return null;
  }
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

const app = getOrInitApp();

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;
export const googleProvider = new GoogleAuthProvider();

export { app };
export default app;
