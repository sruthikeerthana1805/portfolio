import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/config";

export const metadata: Metadata = {
  title: config.name,
  description: config.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
