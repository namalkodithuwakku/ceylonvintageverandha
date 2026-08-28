import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceylonvintageverandha.vercel.app"),
  title: { default: "Private Villa in Ganemulla near Colombo Airport | Ceylon Vintage Verandha", template: "%s | Ceylon Vintage Verandha" },
  description: "Book a full 3-bedroom vacation rental in Ganemulla, Sri Lanka. Ideal for overseas Sri Lankan families, expats, airport-area stays and longer holidays.",
  keywords: ["villa in Ganemulla", "Ganemulla vacation rental", "private villa near Colombo airport", "family holiday home Sri Lanka", "long stay villa Sri Lanka", "airport accommodation Ganemulla", "Ceylon Vintage Verandha"],
  alternates: { canonical: "/" },
  openGraph: { type:"website", locale:"en_LK", url:"/", siteName:"Ceylon Vintage Verandha", title:"Private 3-Bedroom Villa in Ganemulla", description:"A private Sri Lankan home for returning families, overseas visitors and longer stays near Bandaranaike International Airport.", images:[{url:"/images/hero-exterior.webp",width:1448,height:1086,alt:"Ceylon Vintage Verandha private villa in Ganemulla"}] },
  twitter: { card:"summary_large_image", title:"Ceylon Vintage Verandha", description:"Private 3-bedroom vacation rental in Ganemulla, Sri Lanka.", images:["/images/hero-exterior.webp"] },
  robots: { index:true, follow:true },
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
      <body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"VacationRental","name":"Ceylon Vintage Verandha","description":"A full three-bedroom private vacation rental in Ganemulla, Sri Lanka, for family holidays and longer stays.","url":"https://ceylonvintageverandha.vercel.app","image":"https://ceylonvintageverandha.vercel.app/images/hero-exterior.webp","telephone":"+61433669209","email":"ceylonvintageverandha@gmail.com","address":{"@type":"PostalAddress","streetAddress":"326E, Galahitiyawa South","addressLocality":"Ganemulla","addressCountry":"LK"},"numberOfBedrooms":3,"checkinTime":"14:00","checkoutTime":"10:00"})}} />{children}</body>
    </html>
  );
}
