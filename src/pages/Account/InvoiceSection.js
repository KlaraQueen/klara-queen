import React, { useEffect, useState } from "react";
import { saveUserProfile } from "../../services/userProfile";
import * as S from "./styled";

function InvoiceSection({ user, profile, onSaved }) {
  const [companyName, setCompanyName] = useState("");
  const [nip, setNip] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Polska");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const inv = profile?.invoice || {};
    setCompanyName(inv.companyName ?? "");
    setNip(inv.nip ?? "");
    setStreet(inv.street ?? "");
    setPostalCode(inv.postalCode ?? "");
    setCity(inv.city ?? "");
    setCountry(inv.country ?? "Polska");
  }, [profile]);

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
        invoice: {
          companyName: companyName.trim(),
          nip: nip.trim().replace(/\s/g, ""),
          street: street.trim(),
          postalCode: postalCode.trim(),
          city: city.trim(),
          country: country.trim() || "Polska",
        },
      });
      setMsg("Zapisano dane do faktury.");
      onSaved?.();
    } catch (error) {
      if (error.code === "permission-denied") {
        setErr(
          "Brak uprawnień — włącz Firestore i reguły z firebase/firestore.rules.",
        );
      } else {
        setErr(error.message || "Nie udało się zapisać.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <S.PanelTitle>Dane do faktury bez VAT</S.PanelTitle>
      <S.PanelDesc>
        Dane nabywcy na fakturze. Możesz uzupełnić je przed pierwszym zakupem —
        później zmienisz je w każdej chwili.
      </S.PanelDesc>
      {err ? <S.Alert $variant="error">{err}</S.Alert> : null}
      {msg ? <S.Alert $variant="success">{msg}</S.Alert> : null}
      <form onSubmit={handleSubmit}>
        <S.FormGrid>
          <S.Field>
            <S.Label htmlFor="inv-company">
              Nazwa firmy / imię i nazwisko
            </S.Label>
            <S.Input
              id="inv-company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Pełna nazwa lub dane do faktury imiennej"
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="inv-nip">NIP (opcjonalnie)</S.Label>
            <S.Input
              id="inv-nip"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              placeholder="1234567890"
              inputMode="numeric"
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="inv-street">Ulica i numer</S.Label>
            <S.Input
              id="inv-street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="ul. …"
            />
          </S.Field>
          <S.FormRow>
            <S.Field>
              <S.Label htmlFor="inv-zip">Kod pocztowy</S.Label>
              <S.Input
                id="inv-zip"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="00-000"
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="inv-city">Miejscowość</S.Label>
              <S.Input
                id="inv-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Miasto"
              />
            </S.Field>
          </S.FormRow>
          <S.Field>
            <S.Label htmlFor="inv-country">Kraj</S.Label>
            <S.Input
              id="inv-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </S.Field>
          <S.PrimaryBtn type="submit" disabled={saving}>
            {saving ? "Zapisywanie…" : "Zapisz dane do faktury"}
          </S.PrimaryBtn>
        </S.FormGrid>
      </form>
    </>
  );
}

export default InvoiceSection;
