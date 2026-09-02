import type { Metadata } from "next";
import { Space_Grotesk, Inter, Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sruthi — Software Engineer | Game Developer",
  description:
    "Portfolio of Sruthi — Computer Science Engineering student building full-stack apps, GenAI projects, and browser-based games with React, Next.js, and Three.js.",
  keywords: [
    "Sruthi",
    "Full Stack Developer",
    "Creative Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Sruthi" }],
  openGraph: {
    title: "Sruthi — Software Engineer | Game Developer",
    description:
      "Computer Science Engineering student building full-stack apps, GenAI projects, and browser-based games.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sruthi — Software Engineer | Game Developer",
    description:
      "Computer Science Engineering student building full-stack apps, GenAI projects, and browser-based games.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} ${josefinSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-void text-cloud overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
