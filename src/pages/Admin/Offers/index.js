import React, { useState, useEffect, useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import * as S from "./styled";
import OfferForm from "./OfferForm";
import OfferTable from "./OfferTable";
import ConfirmDialog from "../ConfirmDialog";
import Toast from "../Toast";
import {
  fetchOffers,
  createOffer,
  updateOffer,
  removeOffer,
} from "../../../services/offerService";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, error = false) => {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchOffers();
      setOffers(data);
    } catch (err) {
      showToast("Błąd ładowania ofert: " + err.message, true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleAdd = async (data) => {
    try {
      await createOffer(data);
      showToast("Oferta dodana");
      setAdding(false);
      load();
    } catch (err) {
      showToast("Błąd: " + err.message, true);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await updateOffer(editing.id, data);
      showToast("Oferta zaktualizowana");
      setEditing(null);
      load();
    } catch (err) {
      showToast("Błąd: " + err.message, true);
    }
  };

  const handleDelete = async () => {
    if (!deleting) return;
    try {
      await removeOffer(deleting.id);
      showToast("Oferta usunięta");
      setDeleting(null);
      load();
    } catch (err) {
      showToast("Błąd: " + err.message, true);
    }
  };

  const openAdd = () => {
    setEditing(null);
    setAdding(true);
  };

  const openEdit = (offer) => {
    setAdding(false);
    setEditing(offer);
  };

  const closeForm = () => {
    setAdding(false);
    setEditing(null);
  };

  return (
    <S.Section>
      {!adding && !editing && (
        <S.AddBtn onClick={openAdd}>
          <FaPlus /> Dodaj ofertę
        </S.AddBtn>
      )}

      {adding || editing ? (
        <OfferForm
          offer={editing}
          onSave={editing ? handleUpdate : handleAdd}
          onCancel={closeForm}
        />
      ) : loading ? (
        <S.Spinner>Ładowanie ofert…</S.Spinner>
      ) : (
        <OfferTable offers={offers} onEdit={openEdit} onDelete={setDeleting} />
      )}

      {deleting && (
        <ConfirmDialog
          message={`Czy na pewno chcesz usunąć ofertę „${deleting.title}”?`}
          confirmLabel="Tak, usuń"
          cancelLabel="Nie"
          onConfirm={handleDelete}
          onCancel={() => setDeleting(null)}
        />
      )}

      <Toast message={toast?.msg} error={toast?.error} />
    </S.Section>
  );
}
