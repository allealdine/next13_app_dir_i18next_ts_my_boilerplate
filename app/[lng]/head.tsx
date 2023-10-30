import React from "react";
import { languages, fallbackLng } from "../i18n/settings";
import { Terjemahkan } from "../i18n";

interface HeadProps {
  params: {
    lng: string;
  };
}

export default async function Head({ params: { lng } }: HeadProps) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await Terjemahkan(lng);

  return (
    <>
      <title>{t("title")}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}
