import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react" // Import React

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Paul Jr Photography | Professional Photography Services",
  description:
    "Capture life's beautiful moments with Paul Jr Photography. Specializing in weddings, portraits, and events in Listowel, Ontario.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${cormorant.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

