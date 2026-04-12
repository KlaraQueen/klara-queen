import React, { useMemo, useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { mapFirebaseAuthError } from "../../utils/mapFirebaseAuthError";
import * as S from "./styled";

function SecuritySection({ user }) {
  const hasPasswordProvider = useMemo(
    () =>
      user?.providerData?.some((p) => p.providerId === "password") ?? false,
    [user],
  );

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);
    if (!user?.email) {
      return;
    }
    if (next.length < 6) {
      setErr("Nowe hasło musi mieć co najmniej 6 znaków.");
      return;
    }
    if (next !== confirm) {
      setErr("Powtórzenia hasła nie są takie same.");
      return;
    }
    setSaving(true);
    try {
      const cred = EmailAuthProvider.credential(user.email, current);
      await reauthenticateWithCredential(user, cred);
      await updatePassword(user, next);
      setCurrent("");
      setNext("");
      setConfirm("");
      setMsg("Hasło zostało zmienione.");
    } catch (error) {
      setErr(mapFirebaseAuthError(error.code));
    } finally {
      setSaving(false);
    }
  };

  if (!hasPasswordProvider) {
    return (
      <>
        <S.PanelTitle>Hasło i bezpieczeństwo</S.PanelTitle>
        <S.PanelDesc>
          Zmiana hasła dotyczy kont zalogowanych e-mailem i hasłem.
        </S.PanelDesc>
        <S.Hint>
          To konto korzysta z logowania przez Google (lub innego dostawcę)
          — nie ma ustawionego hasła w Firebase. Możesz dodać logowanie hasłem
          w konsoli Firebase (połączenie kont) albo zarządzać hasłem w Google.
        </S.Hint>
      </>
    );
  }

  return (
    <>
      <S.PanelTitle>Hasło i bezpieczeństwo</S.PanelTitle>
      <S.PanelDesc>
        Aby zmienić hasło, podaj obecne hasło, potem wybierz nowe.
      </S.PanelDesc>
      {err ? <S.Alert $variant="error">{err}</S.Alert> : null}
      {msg ? <S.Alert $variant="success">{msg}</S.Alert> : null}
      <form onSubmit={handleSubmit}>
        <S.FormGrid>
          <S.Field>
            <S.Label htmlFor="pw-current">Obecne hasło</S.Label>
            <S.PasswordWrap>
              <S.PasswordInput
                id="pw-current"
                type={show ? "text" : "password"}
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                autoComplete="current-password"
              />
              <S.TogglePw
                type="button"
                onClick={() => setShow((v) => !v)}
                aria-label={show ? "Ukryj" : "Pokaż"}
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </S.TogglePw>
            </S.PasswordWrap>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="pw-new">Nowe hasło</S.Label>
            <S.Input
              id="pw-new"
              type={show ? "text" : "password"}
              value={next}
              onChange={(e) => setNext(e.target.value)}
              autoComplete="new-password"
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="pw-confirm">Powtórz nowe hasło</S.Label>
            <S.Input
              id="pw-confirm"
              type={show ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
            />
          </S.Field>
          <S.PrimaryBtn type="submit" disabled={saving}>
            {saving ? "Zapisywanie…" : "Zmień hasło"}
          </S.PrimaryBtn>
        </S.FormGrid>
      </form>
    </>
  );
}

export default SecuritySection;
