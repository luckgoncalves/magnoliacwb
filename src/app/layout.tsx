import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

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
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm ">
        <h1 className="fixed text-3xl left-0 top-0 flex w-full font-serif font-semibold text-[#E79C88] justify-center pb-6 pt-8 backdrop-blur-2xl bg-gradient-to-r from-white to-[#FFDAD2]">
          OFFICE BEAUTY
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-r from-white to-[#FFDAD2]">
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
      </div>
        {children}
      </body>
    </html>
  )
}
