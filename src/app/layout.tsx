import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { NavItem } from '../components/NavItem/NavItem'
import { Menu, MenuMobile } from '../components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Office Beauty',
  description: 'Salão de beleza em Curitiba, especializado em cabelos, unhas, sobrancelhas, piercing e tatuagems. Visite nosso espaço e conheça nossos serviços',
  category: "Tatuagems, Tatuagems Curitiba, Tatuagem Pinheirinho, Tatuagem Capão Raso, Tatuagem Xaxim, Piercing, Piercing Curitiba, Piercing Pinheirinho, Piercing Capão Raso, Piercing Xaxim, Unhas,  Unhas Capão Raso,  Unhas Pinheirinho,  Unhas Xaxim, Cabelos, Sobrancelhas, Sobrancelhas Pinheirinho, Sobrancelhas Xaxim, Sobrancelhas Capão Raso, Design de sobrancelhas",
  keywords: "Tatuagems, Tatuagems Curitiba, Tatuagem Pinheirinho, Tatuagem Capão Raso, Tatuagem Xaxim, Piercing, Piercing Curitiba, Piercing Pinheirinho, Piercing Capão Raso, Piercing Xaxim, Unhas,  Unhas Capão Raso,  Unhas Pinheirinho,  Unhas Xaxim, Cabelos, Sobrancelhas, Sobrancelhas Pinheirinho, Sobrancelhas Xaxim, Sobrancelhas Capão Raso, Design de sobrancelhas"
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
