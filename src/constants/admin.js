/** Musi być zgodny z REACT_APP_ADMIN_EMAIL w .env — tylko ten e-mail ma dostęp do /admin i /konto. */
export const ADMIN_EMAIL = (process.env.REACT_APP_ADMIN_EMAIL || "").trim();

export function isAdminUser(user) {
  return Boolean(user?.email && ADMIN_EMAIL && user.email === ADMIN_EMAIL);
}
