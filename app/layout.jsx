import Header from "./components/Header";
import "./globals.css";

import { Jost } from "next/font/google";
const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html className={jost.className} lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
