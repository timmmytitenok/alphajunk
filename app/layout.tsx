import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALPHA JUNK | Junk Removal Done Right",
  description: "Junk Removal — Fast, Clean, Simple. Serving Columbus, Ohio.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
