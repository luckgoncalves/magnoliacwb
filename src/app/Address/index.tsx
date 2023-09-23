'use client'

import Image from "next/image";
import { SVGProps } from "react";

export function Address() {
    const linkWhatsapp ='https://wa.me/5511989817883?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio';

    return (
        <section className="flex items-center justify-between w-full text-[#E79C88] mt-24 mb-6 gap-14">
          <a
            className="pointer-events-none flex place-items-center text-[#E79C88]"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo-office-beauty.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>

          <div className="flex flex-col items-start gap-5">
            <p className="text-start">Endereço</p>
            <p className={`m-0 text-start text-[#E79C88]`}>
              R. Emanuel Kant, 60 - Sala 418 - Capão Raso, Curitiba - PR, 81020-670
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="text-start">Horário de funcionamento</p>
            <p className={`m-0 text-start text-[#E79C88]`}>
              Segunda à Sexta: 09:00 às 18:00
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-start">Sociais</p>
            <div className="flex gap-4">
              <p className="m-0 text-start" onClick={() => window.open(linkWhatsapp, '_blank')}>
                <TablerBrandWhatsapp />
              </p>
              <p className="m-0 text-start" onClick={() => window.open(linkWhatsapp, '_blank')}>
                <TablerBrandInstagram />
              </p>
            </div>
          </div>
        </section>
    )
}


export function TablerBrandInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.5-4.5v.01"></path></g></svg>
  )
}


export function TablerBrandWhatsapp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></g></svg>
  )
}
