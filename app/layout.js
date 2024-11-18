import localFont from "next/font/local";
import "./globals.css";
import AvoNavigation from "./avoNavigation/page";
import Script from "next/script";
import Footer from "./Footer/page";
import CursorAnimated from "./CursorAnimated/page";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Avo Curations",
  description: "Avo Curations designs hampers.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <AvoNavigation />
        <CursorAnimated />
        {children}
        <Footer />
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="beforeInteractive" />
        <Script id="aos-init">{`AOS.init();`}</Script>
      </body>
    </html>
  );
}
