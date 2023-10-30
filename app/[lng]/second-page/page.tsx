import Link from "next/link";
import { Terjemahkan } from "../../i18n";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await Terjemahkan(lng, "second-page");
  return (
    <>
      <main>
        <Header heading={t("h1")} />
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>

      <Footer lng={lng} path="/second-page" />
    </>
  );
}
