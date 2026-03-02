import { useEffect } from "react";

type Props = {
  siteUrl: string;
  scriptSrc: string;
  initJs: string;
};

export function StatcounterSimple({ siteUrl, scriptSrc, initJs }: Props) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const safeId =
      "statcounter-" +
      btoa(unescape(encodeURIComponent(siteUrl + "|" + scriptSrc))).replace(/[^a-z0-9]/gi, "");

    if (document.getElementById(safeId)) return;

    new Function(initJs)();

    const s = document.createElement("script");
    s.id = safeId;
    s.async = true;
    s.src = scriptSrc;
    document.head.appendChild(s);
  }, [siteUrl, scriptSrc, initJs]);

  return null;
}
