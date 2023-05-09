import Footer from "./utils/Footer/Footer";
import Header from "./utils/Header/Header";
import "./globals.css";

export const metadata = {
  title: { default: "Home | Portfolio", template: "%s | Portfolio" },
  description: "Homepage of the portfolio application.",
  icons: {
    icon: "/icon.svg",
  },
};

import { Jost } from "next/font/google";
import MuiTheme from "./utils/themes/MuiThemeProvider";
const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <MuiTheme>
        <body className={jost.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </MuiTheme>
    </html>
  );
}
