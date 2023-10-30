import { Terjemahkan } from "../../i18n";

interface HeadProps {
  params: {
    lng: string;
  };
}

export default async function Head({ params: { lng } }: HeadProps) {
  const { t } = await Terjemahkan(lng, "client-page");

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
