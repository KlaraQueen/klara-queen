import { useState, useEffect } from "react";
import { fetchOffers, fetchOffer } from "../services/offerService";

export function useOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const remote = await fetchOffers();
        if (!cancelled) setOffers(remote);
      } catch {
        if (!cancelled) setOffers([]);
      }
      if (!cancelled) setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { offers, loading };
}

export function useOffer(id) {
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const remote = await fetchOffer(String(id));
        if (!cancelled) setOffer(remote);
      } catch {
        if (!cancelled) setOffer(null);
      }
      if (!cancelled) setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return { offer, loading };
}
