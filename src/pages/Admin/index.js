import React, { useState } from "react";
import * as S from "./styled";
import Sidebar from "./Sidebar";
import Offers from "./Offers";
import Orders from "./Orders";
import Invoices from "./Invoices";

export default function Admin() {
  const [section, setSection] = useState(
    () => sessionStorage.getItem("admin_section") || "offers",
  );

  const changeSection = (key) => {
    setSection(key);
    sessionStorage.setItem("admin_section", key);
  };

  return (
    <S.Page>
      <S.Container>
        <S.Header>
          <S.Title>Panel administracyjny</S.Title>
        </S.Header>
        <Sidebar active={section} onChange={changeSection} />
        {section === "offers" && <Offers />}
        {section === "orders" && <Orders />}
        {section === "invoices" && <Invoices />}
      </S.Container>
    </S.Page>
  );
}
