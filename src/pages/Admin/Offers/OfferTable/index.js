import React from "react";
import * as S from "./styled";
import { getOfferCoverUrl } from "../../../../utils/offerImages";

export default function OfferTable({ offers, onEdit, onDelete }) {
  if (offers.length === 0) {
    return (
      <S.Table>
        <S.Empty>
          Brak ofert w bazie. Kliknij „Dodaj ofertę", aby dodać pierwszą.
        </S.Empty>
      </S.Table>
    );
  }

  return (
    <S.Table>
      <S.Head>
        <S.HeadCell></S.HeadCell>
        <S.HeadCell>Tytuł</S.HeadCell>
        <S.HeadCell>Kategoria</S.HeadCell>
        <S.HeadCell>Styl</S.HeadCell>
        <S.HeadCell>Cena</S.HeadCell>
        <S.HeadCell>Akcje</S.HeadCell>
      </S.Head>
      {offers.map((o) => (
        <S.Row key={o.id}>
          <S.Thumb
            src={
              getOfferCoverUrl(o) ||
              "https://via.placeholder.com/48x48?text=%3F"
            }
            alt=""
          />
          <S.Title>{o.title}</S.Title>
          <S.Cell>{o.category || "—"}</S.Cell>
          <S.Cell>{o.style || "—"}</S.Cell>
          <S.Cell>{o.price}</S.Cell>
          <S.Actions>
            <S.EditBtn onClick={() => onEdit(o)}>Edytuj</S.EditBtn>
            <S.DeleteBtn onClick={() => onDelete(o)}>Usuń</S.DeleteBtn>
          </S.Actions>
        </S.Row>
      ))}
    </S.Table>
  );
}
