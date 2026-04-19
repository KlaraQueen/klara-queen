import React from "react";
import { FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import * as S from "./styled";

const TABS = [
  { key: "offers", label: "Oferty", icon: <FaBoxOpen /> },
  { key: "orders", label: "Zamówienia", icon: <FaShoppingCart /> },
];

export default function Sidebar({ active, onChange }) {
  return (
    <S.Nav>
      {TABS.map((t) => (
        <S.Tab
          key={t.key}
          $active={active === t.key}
          onClick={() => onChange(t.key)}
        >
          {t.icon} {t.label}
        </S.Tab>
      ))}
    </S.Nav>
  );
}
