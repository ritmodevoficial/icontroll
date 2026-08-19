import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "iControll | Sites e sistemas feitos para o seu negócio",
    template: "%s | iControll",
  },
  description:
    "A iControll desenvolve sites profissionais e sistemas personalizados para empresas e negócios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}