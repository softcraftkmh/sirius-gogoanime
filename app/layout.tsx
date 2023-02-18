import { Lora, Raleway } from '@next/font/google'
import clsx from 'clsx'

import Footer from '@/modules/Layout/footer'
import Header from '@/modules/Layout/header'

import './globals.css'

const raleway = Raleway({
  variable: '--font-raleway',
  display: 'swap',
  subsets: ['latin'],
})
const lora = Lora({
  variable: '--font-lora',
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(raleway.variable, lora.variable)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
