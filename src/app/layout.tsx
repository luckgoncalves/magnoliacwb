import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { NavItem } from '../components/NavItem/NavItem'

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
      <main className="flex min-h-screen flex-col items-center justify-start md:justify-center bg-gradient-to-r from-white to-[#FFDAD2] pt-20 px-3 lg:pt-24 lg:px-24">
        <nav className="fixed z-10 left-0 top-0 w-full font-semibold text-[#E79C88] pb-6 pt-5 bg-gradient-to-r from-white to-[#FFDAD2]">
          <div className="flex flex-wrap justify-center items-center mx-auto">
            <div className="justify-between items-center w-[96%] order-1 bg-white rounded-full p-2">
              <ul className="flex flex-row font-medium justify-center space-x-8 mt-0 rounded-full border-[1px] border-[#E79C88]">
                <NavItem label='Office Beauty' href="services" active={false} />
                <NavItem label='Serviços' href="services" active={false} />
                <NavItem label='Sobre nós' href="about" active={false} />
                <NavItem label='Agende um horário' href="Contact" active={false} />
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </main>
      </body>
    </html>
  )
}
