import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Jalu Sena Purwa Andhika | Portofolio",
  description:
    "Portofolio Jalu Sena Purwa Andhika, lulusan S1 Teknik Informatika dengan pengalaman koordinasi tim, administrasi kegiatan, dan pengelolaan data organisasi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
