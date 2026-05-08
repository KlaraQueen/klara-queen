import { Timestamp } from "firebase/firestore";

/**
 * Firestore Timestamp, Date lub surowy zapis ({ seconds }) → Date albo null.
 */
export function coerceFirestoreDate(value) {
  if (value == null) {
    return null;
  }
  if (typeof value.toDate === "function") {
    try {
      return value.toDate();
    } catch {
      return null;
    }
  }
  if (
    typeof value === "object" &&
    typeof value.seconds === "number"
  ) {
    return new Date(value.seconds * 1000);
  }
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  if (typeof value === "number") {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** YYYY-MM-DD w strefie lokalnej (do input[type=date]). */
export function dateToIsoLocal(date) {
  const d = coerceFirestoreDate(date) || new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** YYYY-MM-DD → Timestamp (południe lokalnego dnia). */
export function localDateToFirestoreTimestamp(isoYmd) {
  const raw = isoYmd?.trim();
  if (!raw?.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return Timestamp.fromDate(new Date());
  }
  const parts = raw.split("-").map((n) => parseInt(n, 10));
  const [y, mo, da] = parts;
  if (
    Number.isNaN(y) ||
    Number.isNaN(mo) ||
    Number.isNaN(da) ||
    mo < 1 ||
    mo > 12 ||
    da < 1 ||
    da > 31
  ) {
    return Timestamp.fromDate(new Date());
  }
  const localNoon = new Date(y, mo - 1, da, 12, 0, 0, 0);
  return Timestamp.fromDate(localNoon);
}
