import Footer from "./utils/Footer/Footer";
import Header from "./utils/Header/Header";
import "./globals.css";

import { Jost } from "next/font/google";
const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
