import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JONEXO7OFFICIAL | Gaming Community",
  description:
    "Comunidad gaming de Jonexo7. Torneos FC, COD Zombies, GTA, Rocket League, Fortnite y mucho más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}