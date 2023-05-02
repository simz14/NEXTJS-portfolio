"use client";

import styled from "styled-components";
import Header from "./components/Header";
import "./globals.css";

import { Jost } from "next/font/google";
const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

const ContentWrapper = styled.div`
  padding-top: 42px;
`;

export default function RootLayout({ children }) {
  return (
    <html className={jost.className} lang="en">
      <body>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
