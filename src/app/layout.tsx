import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { NavItem } from '../components/NavItem/NavItem'
import { Menu, MenuMobile } from '../components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estúdio de Tatuagem, Piercing, Manicure e Sobrancelhas | Magnólia',
  description: 'Na Magnólia, oferecemos tatuagens personalizadas, piercings profissionais, manicure e design de sobrancelhas. Agende sua visita e realce sua beleza!',
  category: "tatuagem, piercing, manicure, design de sobrancelhas, estúdio de tatuagem, arte corporal, nail art, sobrancelhas perfeitas, Curitiba",
  keywords: "tatuagem, piercing, manicure, design de sobrancelhas, estúdio de tatuagem, arte corporal, nail art, sobrancelhas perfeitas, Curitiba",
  twitter: {
    title: 'Estúdio de Tatuagem, Piercing, Manicure e Sobrancelhas | Magnólia',
    description: 'Na Magnólia, oferecemos tatuagens personalizadas, piercings profissionais, manicure e design de sobrancelhas. Agende sua visita e realce sua beleza!',
    images: [
      {
        url: 'https://instagram.fbfh21-1.fna.fbcdn.net/v/t51.2885-19/430153766_1496579174600063_7253668615630894564_n.jpg?_nc_ht=instagram.fbfh21-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mAk9pFHUVTQQ7kNvgG7y8yG&edm=AFg4Q8wBAAAA&ccb=7-5&oh=00_AYBfyklRb3Vn4ng6lARWtw-T1yuOmergM9CDEaQbVqx9bQ&oe=668D4314&_nc_sid=0b30b7',
        width: 800,
        height: 600,
        alt: 'Estúdio de Tatuagem, Piercing, Manicure e Sobrancelhas | Magnólia',
      }
    ]
  },
  openGraph:{
    title: 'Estúdio de Tatuagem, Piercing, Manicure e Sobrancelhas | Magnólia',
    description: 'Na Magnólia, oferecemos tatuagens personalizadas, piercings profissionais, manicure e design de sobrancelhas. Agende sua visita e realce sua beleza!',
    images: [
      {
        url: 'https://instagram.fbfh21-1.fna.fbcdn.net/v/t51.2885-19/430153766_1496579174600063_7253668615630894564_n.jpg?_nc_ht=instagram.fbfh21-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mAk9pFHUVTQQ7kNvgG7y8yG&edm=AFg4Q8wBAAAA&ccb=7-5&oh=00_AYBfyklRb3Vn4ng6lARWtw-T1yuOmergM9CDEaQbVqx9bQ&oe=668D4314&_nc_sid=0b30b7',
        width: 800,
        height: 600,
        alt: 'Estúdio de Tatuagem, Piercing, Manicure e Sobrancelhas | Magnólia',
      }
    ],
  }
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
