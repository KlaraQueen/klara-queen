/** Zwraca czytelny komunikat po kodzie błędu Firebase Auth (pl). */
export function mapFirebaseAuthError(code) {
  const map = {
    "auth/email-already-in-use": "Ten adres e-mail jest już zarejestrowany.",
    "auth/invalid-email": "Nieprawidłowy adres e-mail.",
    "auth/weak-password": "Hasło jest za słabe — użyj co najmniej 6 znaków.",
    "auth/user-disabled": "To konto zostało wyłączone.",
    "auth/user-not-found": "Nie znaleziono konta z tym adresem e-mail.",
    "auth/wrong-password": "Nieprawidłowe hasło.",
    "auth/invalid-credential": "Nieprawidłowy e-mail lub hasło.",
    "auth/too-many-requests": "Zbyt wiele prób. Spróbuj ponownie za chwilę.",
    "auth/popup-closed-by-user": "Logowanie przerwane — okno zostało zamknięte.",
    "auth/cancelled-popup-request": "Można uruchomić tylko jedno okno logowania naraz.",
    "auth/account-exists-with-different-credential":
      "Konto z tym e-mailem istnieje już przy innym sposobie logowania.",
    "auth/operation-not-allowed": "Ta metoda logowania nie jest włączona w Firebase Console.",
    "auth/network-request-failed": "Błąd sieci. Sprawdź połączenie z internetem.",
    "auth/requires-recent-login":
      "Ze względów bezpieczeństwa wyloguj się i zaloguj ponownie, potem spróbuj jeszcze raz.",
  };
  return map[code] || "Wystąpił nieoczekiwany błąd. Spróbuj ponownie.";
}
