import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "700", "900"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
};

export const url = "https://yushkevichDmitry.com"

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Dmitry Yushkevich",
  description: "Versatile full-stack developer specializing in Next.js and React, with a comprehensive tech stack.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Dmitry Yushkevich",
    description: "Versatile full-stack developer specializing in Next.js and React, with a comprehensive tech stack.",
    url,
    type: "website"
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className} id="root">{children}</body>
    </html></NextIntlClientProvider>
  );
}
