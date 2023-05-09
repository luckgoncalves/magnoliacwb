import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-white to-[#FFDAD2] p-24">
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

      <div className="text-center font-semibold text-[#E79C88]">
        <p className={`m-0 max-w-[30ch] text-center `}>
          Rua Emanuel Kant, 60 - Capão Raso, Curitiba - PR, 81020-670
        </p>        
        <a href="https://api.whatsapp.com/send/?phone=5541988245295&text&type=phone_number&app_absent=0" target='_blank'>(41) 98824-5295</a>
      </div>
    </main>
  )
}
