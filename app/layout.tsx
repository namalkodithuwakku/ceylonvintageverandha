import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Ceylon Vintage Verandha | Private Villa in Ganemulla", template: "%s | Ceylon Vintage Verandha" },
  description: "A private three-bedroom villa in Ganemulla, Sri Lanka, within easy reach of Bandaranaike International Airport and Colombo.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
