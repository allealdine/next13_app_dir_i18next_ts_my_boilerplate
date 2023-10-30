"use client";

import { FooterBase } from "./FooterBase";
import { Terjemahkan } from "../../../i18n/client";

export const Footer = ({ lng, path }: { lng: string; path?: string }) => {
  const { i18n } = Terjemahkan(lng, "footer");
  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};
