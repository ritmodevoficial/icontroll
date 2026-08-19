import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "iControll | Sites e sistemas feitos para o seu negócio.",
    template: "%s | iControll",
  },
  description:
    "A iControll desenvolve sites profissionais e sistemas personalizados para ajudar empresas a apresentar seus serviços, organizar processos e crescer no digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}