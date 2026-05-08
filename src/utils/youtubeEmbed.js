/**
 * Konwertuje typowy URL YouTube (watch, shorts, youtu.be) na adres `/embed/` do iframe.
 * Zwraca pusty string, gdy link nie wygląda na YouTube lub brak ID.
 */
export function youtubeUrlToEmbedUrl(url) {
  if (!url || typeof url !== "string") return "";
  const raw = url.trim();
  if (!raw) return "";

  let u;
  try {
    const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    u = new URL(withScheme);
  } catch {
    return "";
  }

  const hostRaw = u.hostname.replace(/^www\./i, "");
  const host = hostRaw.replace(/^m\./i, "");

  const toEmbed = (id) =>
    /^[\w-]{6,}$/.test(id || "")
      ? `https://www.youtube.com/embed/${id}`
      : "";

  // Już embed
  if (
    /^youtube\.com$/i.test(host) &&
    u.pathname.startsWith("/embed/")
  ) {
    const id = u.pathname.slice("/embed/".length).split("/")[0].split("?")[0];
    return toEmbed(id);
  }

  if (/^youtu\.be$/i.test(host)) {
    const id = u.pathname.replace(/^\//, "").split("/")[0]?.split("?")[0];
    return toEmbed(id);
  }

  if (!/^youtube\.com$/i.test(host)) {
    return "";
  }

  const shorts = u.pathname.match(/^\/shorts\/([\w-]+)/i);
  if (shorts) return toEmbed(shorts[1]);

  const live = u.pathname.match(/^\/live\/([\w-]+)/i);
  if (live) return toEmbed(live[1]);

  const v = u.searchParams.get("v");
  if (v) return toEmbed(v);

  return "";
}
