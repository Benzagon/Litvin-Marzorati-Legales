import type { Metadata } from "next"
import clsx from "clsx"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/sections/Footer"
import TagManager from "react-gtm-module"

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    {
      path: "./fonts/Poppins-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
})

const meshedDisplay = localFont({
  variable: "--font-meshedDisplay",
  src: [
    {
      path: "./fonts/MeshedDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MeshedDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MeshedDisplay-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
})

const dmSerif = localFont({
  variable: "--font-dmSerif",
  src: [
    {
      path: "./fonts/DMSerifDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
})

const ubuntu = localFont({
  variable: "--font-ubuntu",
  src: [
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
})

export const metadata: Metadata = {
  title: "Litvin Marzorati Legales",
  description: "Estudio de legales",
}

const tagManagerArgs = {
  gtmId: "GTM-N98L8NKH",
}

TagManager.initialize(tagManagerArgs)



export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body
        className={clsx(
          poppins.variable,
          meshedDisplay.variable,
          dmSerif.variable,
          "bg-background",
          "font-poppins"
        )}
      >
        <main className="flex flex-col overflow-hidden">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
