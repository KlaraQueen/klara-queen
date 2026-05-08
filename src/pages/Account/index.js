import React, { useCallback, useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../services/userProfile";
import * as S from "./styled";
import ProfileSection from "./ProfileSection";
import SecuritySection from "./SecuritySection";

const TABS = [
  { id: "profile", label: "Profil", icon: FaUser },
  { id: "security", label: "Hasło i bezpieczeństwo", icon: FaLock },
];

function Account() {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("profile");
  const [profile, setProfile] = useState(null);

  const reloadProfile = useCallback(async () => {
    if (!user) {
      return;
    }
    const data = await fetchUserProfile(user.uid);
    setProfile(data);
  }, [user]);

  useEffect(() => {
    reloadProfile();
  }, [reloadProfile]);

  const firestoreOff = !db;

  return (
    <S.Page>
      <S.Layout>
        <S.Shell>
          <S.Sidebar>
            <S.Brand>
              <S.BrandTitle>Twoje konto</S.BrandTitle>
              <S.BrandEmail>{user?.email || ""}</S.BrandEmail>
            </S.Brand>
            <S.TabList>
              {TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <S.Tab
                    key={tab.id}
                    type="button"
                    $active={active === tab.id}
                    onClick={() => setActive(tab.id)}
                  >
                    <Icon aria-hidden />
                    {tab.label}
                  </S.Tab>
                );
              })}
            </S.TabList>
            <S.LogoutBtn
              type="button"
              onClick={async () => {
                await signOutUser();
                navigate("/");
              }}
            >
              <FaLock aria-hidden />
              Wyloguj się
            </S.LogoutBtn>
          </S.Sidebar>
          <S.Main>
            {firestoreOff ? (
              <S.Alert $variant="error">
                Firestore nie jest skonfigurowany lub brak połączenia. Włącz
                Firestore w Firebase Console i opublikuj reguły z pliku{" "}
                <code style={{ fontSize: "0.8em" }}>
                  firebase/firestore.rules
                </code>
                .
              </S.Alert>
            ) : null}

            {active === "profile" ? (
              <ProfileSection
                user={user}
                profile={profile}
                onSaved={reloadProfile}
              />
            ) : null}
            {active === "security" ? <SecuritySection user={user} /> : null}
          </S.Main>
        </S.Shell>
      </S.Layout>
    </S.Page>
  );
}

export default Account;
