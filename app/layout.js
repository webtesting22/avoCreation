import localFont from "next/font/local";
import "./globals.css";
import AvoNavigation from "./avoNavigation/page";
import Head from "next/head";

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
    <Head>
    <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
    </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AvoNavigation />
        {children}
      </body>
    </html>
  );
}
