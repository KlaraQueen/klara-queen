import React, { useCallback, useEffect, useState } from "react";
import {
  FaUser,
  FaFileInvoice,
  FaLock,
  FaShoppingBag,
  FaReceipt,
} from "react-icons/fa";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  fetchUserProfile,
  fetchUserOrders,
  fetchUserInvoices,
} from "../../services/userProfile";
import * as S from "./styled";
import ProfileSection from "./ProfileSection";
import InvoiceSection from "./InvoiceSection";
import SecuritySection from "./SecuritySection";
import OrdersSection from "./OrdersSection";
import InvoicesSection from "./InvoicesSection";

const TABS = [
  { id: "profile", label: "Profil", icon: FaUser },
  { id: "invoice", label: "Dane do faktury", icon: FaFileInvoice },
  { id: "security", label: "Hasło i bezpieczeństwo", icon: FaLock },
  { id: "orders", label: "Zakupy", icon: FaShoppingBag },
  { id: "invoices", label: "Faktury", icon: FaReceipt },
];

function Account() {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("profile");
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loadingLists, setLoadingLists] = useState(false);

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

  useEffect(() => {
    if (!user || active !== "orders") {
      return;
    }
    setLoadingLists(true);
    fetchUserOrders(user.uid)
      .then(setOrders)
      .finally(() => setLoadingLists(false));
  }, [user, active]);

  useEffect(() => {
    if (!user || active !== "invoices") {
      return;
    }
    setLoadingLists(true);
    fetchUserInvoices(user.uid, user.email)
      .then(setInvoices)
      .finally(() => setLoadingLists(false));
  }, [user, active]);

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
            {active === "invoice" ? (
              <InvoiceSection
                user={user}
                profile={profile}
                onSaved={reloadProfile}
              />
            ) : null}
            {active === "security" ? <SecuritySection user={user} /> : null}
            {active === "orders" ? (
              <OrdersSection orders={orders} loading={loadingLists} />
            ) : null}
            {active === "invoices" ? (
              <InvoicesSection invoices={invoices} loading={loadingLists} />
            ) : null}
          </S.Main>
        </S.Shell>
      </S.Layout>
    </S.Page>
  );
}

export default Account;
