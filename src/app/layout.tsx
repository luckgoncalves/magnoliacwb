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
          <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl">
            <div className="justify-between items-center w-auto order-1">
              <ul className="flex flex-row font-medium space-x-8 mt-0">
                <NavItem label='Sobre' href="about" active={false} />
                <NavItem label='Serviços' href="services" active={false} />
                <NavItem label='Contato' href="Contact" active={false} />

              </ul>
            </div>
          </div>
        </nav>
        {children}
        <div className="bottom-0 left-0 flex h-23 w-full items-end justify-center">
          <a
            className="pointer-events-none flex place-items-center text-[#E79C88] gap-2 p-8"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo-ob.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </main>
      </body>
    </html>
  )
}
