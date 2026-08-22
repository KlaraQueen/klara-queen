import React, { useEffect, useState } from "react";
import { updateProfile, deleteUser } from "firebase/auth";
import { saveUserProfile } from "../../services/userProfile";
import { mapFirebaseAuthError } from "../../utils/mapFirebaseAuthError";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

function ProfileSection({ user, profile, onSaved }) {
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteErr, setDeleteErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setDisplayName(profile?.displayName ?? user?.displayName ?? "");
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

      <S.DeleteSection>
        <S.DeleteTitle>Usuwanie konta</S.DeleteTitle>
        <S.DeleteWarning>
          Uwaga — usunięcie konta jest nieodwracalne. Wszystkie Twoje dane,
          zamówienia i faktury zostaną trwale usunięte.
        </S.DeleteWarning>
        {deleteErr ? <S.Alert $variant="error">{deleteErr}</S.Alert> : null}
        {!showDeleteConfirm ? (
          <S.DangerBtn type="button" onClick={() => setShowDeleteConfirm(true)}>
            Usuń moje konto
          </S.DangerBtn>
        ) : (
          <S.DeleteConfirmBox>
            <S.DeleteConfirmText>
              Czy na pewno chcesz usunąć konto? Tej operacji nie można cofnąć.
            </S.DeleteConfirmText>
            <S.DeleteBtnRow>
              <S.DangerBtn
                type="button"
                disabled={deleting}
                onClick={async () => {
                  setDeleteErr(null);
                  setDeleting(true);
                  try {
                    await deleteUser(user);
                    navigate("/");
                  } catch (error) {
                    setDeleteErr(
                      error.code === "auth/requires-recent-login"
                        ? "Wyloguj się i zaloguj ponownie, a potem spróbuj usunąć konto."
                        : error.message || "Nie udało się usunąć konta.",
                    );
                  } finally {
                    setDeleting(false);
                  }
                }}
              >
                {deleting ? "Usuwanie…" : "Tak, usuń konto"}
              </S.DangerBtn>
              <S.GhostBtn
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Anuluj
              </S.GhostBtn>
            </S.DeleteBtnRow>
          </S.DeleteConfirmBox>
        )}
      </S.DeleteSection>
    </>
  );
}

export default ProfileSection;
