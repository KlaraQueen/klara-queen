import React, { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { saveUserProfile } from "../../services/userProfile";
import { mapFirebaseAuthError } from "../../utils/mapFirebaseAuthError";
import * as S from "./styled";

function ProfileSection({ user, profile, onSaved }) {
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setDisplayName(
      profile?.displayName ?? user?.displayName ?? "",
    );
    setPhone(profile?.phone ?? "");
  }, [profile, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);
    if (!user) {
      return;
    }
    setSaving(true);
    try {
      await saveUserProfile(user.uid, {
        displayName: displayName.trim(),
        phone: phone.trim(),
      });
      await updateProfile(user, {
        displayName: displayName.trim() || null,
      });
      setMsg("Zapisano dane profilu.");
      onSaved?.();
    } catch (error) {
      if (error.code === "permission-denied") {
        setErr(
          "Brak uprawnień do zapisu — w konsoli Firebase włącz Firestore i opublikuj reguły z pliku firebase/firestore.rules.",
        );
      } else {
        setErr(
          error.code && error.code.startsWith("auth/")
            ? mapFirebaseAuthError(error.code)
            : error.message || "Nie udało się zapisać.",
        );
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <S.PanelTitle>Profil</S.PanelTitle>
      <S.PanelDesc>
        Imię i nazwisko oraz telefon — przydadzą się przy kontakcie i
        zamówieniach.
      </S.PanelDesc>
      {err ? <S.Alert $variant="error">{err}</S.Alert> : null}
      {msg ? <S.Alert $variant="success">{msg}</S.Alert> : null}
      <form onSubmit={handleSubmit}>
        <S.FormGrid>
          <S.Field>
            <S.Label htmlFor="acc-display">Imię i nazwisko</S.Label>
            <S.Input
              id="acc-display"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="np. Klara Kowalska"
              autoComplete="name"
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="acc-phone">Telefon</S.Label>
            <S.Input
              id="acc-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+48 …"
              autoComplete="tel"
            />
          </S.Field>
          <S.PrimaryBtn type="submit" disabled={saving}>
            {saving ? "Zapisywanie…" : "Zapisz profil"}
          </S.PrimaryBtn>
        </S.FormGrid>
      </form>
    </>
  );
}

export default ProfileSection;
