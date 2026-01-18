import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "IES Cura Valera",
  description: "School website replica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="main-container">
            <Header />
            <Navbar />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
