import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { NavItem } from '../components/NavItem/NavItem'
import { Menu, MenuMobile } from '../components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Office Beauty',
  description: 'Salão de beleza em Curitiba, especializado em cabelos, unhas, sobrancelhas, cílios, piercing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-start md:justify-center bg-gradient-to-r from-white to-[#FFDAD2]">
        <Menu />
        <MenuMobile />
        {children}
      </main>
      </body>
    </html>
  )
}
