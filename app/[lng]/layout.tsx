import React from "react";
import "./global.css";

import { dir } from "i18next";
import { languages } from "../i18n/settings";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
