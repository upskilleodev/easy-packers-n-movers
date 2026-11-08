import type { Metadata, Viewport } from "next";
import { Fraunces, Great_Vibes, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Easy Packers & Movers | Vijay Kumar | IBA Approved | Chikkamagaluru",
  description:
    "An IBA Bank Approved Packers & Movers. We Providing GST and IBA Approval Bill. Proprietor Vijay Kumar. Head Office Chikkamagaluru - 577 101. Service All over INDIA. Call 80880 27159 / WhatsApp 90366 68067.",
  keywords: [
    "Easy Packers & Movers",
    "Vijay Kumar packers and movers",
    "packers and movers Chikkamagaluru",
    "IBA approved packers and movers",
    "GST IBA approval bill",
    "house shifting Karnataka",
    "office shifting India",
  ],
  openGraph: {
    title: "Easy Packers & Movers — Vijay Kumar",
    description:
      "An IBA Bank Approved Packers & Movers. GST and IBA Approval Bill. Service All over INDIA. Head Office: Chikkamagaluru - 577 101.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#071428",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${fraunces.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
