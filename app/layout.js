import "./globals.css";

export const metadata = {
  title: "Adekemi Akinsipe | Ministry, Music & Financial Consulting",
  description:
    "Meet Evangelist Adekemi Akinsipe, founder of KemmyMuzik International. Explore her ministry, live worship, financial consulting and marriage counselling.",
  openGraph: {
    title: "Adekemi Akinsipe | A life of worship. A heart to serve.",
    description:
      "Ministry, music and financial consulting, rooted in faith and integrity.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
