import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Program Design Lab - Software Development & Design",
  description: "Transform your ideas into digital reality. Expert web development, mobile apps, and backend solutions.",
  generator: "Program Design Lab",
  keywords: ["software development", "web development", "mobile apps", "programming", "design"],
  authors: [{ name: "Program Design Lab" }],
  creator: "Program Design Lab",
  publisher: "Program Design Lab",
  openGraph: {
    title: "Program Design Lab - Software Development & Design",
    description:
      "Transform your ideas into digital reality. Expert web development, mobile apps, and backend solutions.",
    url: "https://programdesignlab.com",
    siteName: "Program Design Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Design Lab - Software Development & Design",
    description:
      "Transform your ideas into digital reality. Expert web development, mobile apps, and backend solutions.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistMono.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
