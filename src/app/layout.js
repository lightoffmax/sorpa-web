
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import { NextUIProvider } from '@nextui-org/react'
import Wrapper from "./components/wrapper";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-hidden antialiased`}
      >
      <AuthProvider>
        <Nav/>
        <Wrapper content={children} />
      </AuthProvider>
      </body>
      
    </html>
    
  );
}