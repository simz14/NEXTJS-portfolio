import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledJsxRegistry from "./components/registry";
import "./globals.css";

import { Jost } from "next/font/google";
const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <StyledJsxRegistry>
        <body className={jost.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledJsxRegistry>
    </html>
  );
}
