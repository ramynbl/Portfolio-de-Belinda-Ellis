import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const generalSans = localFont({
  src: "../../public/font/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
});

export const metadata = {
  title: "Belinda Nwt.",
  description: "Créatrice d'univers visuels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${interTight.variable} ${generalSans.variable}`}>
      <head>
        <link rel="icon" href="/la-lettre-b.png" />
      </head>
      <body>
        <div className="layout-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
