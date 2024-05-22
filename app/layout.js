import { Inter } from "next/font/google";
import "./globals.css";
import Fluid from "./navigate/Fluid"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shetty Group Of Institutions",
  description: "Creativity Meets Talent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pastel" className="no-scrollbar">
      <body className={inter.className}>
        <Fluid />
        {children}
      </body>
    </html>
  );
}
