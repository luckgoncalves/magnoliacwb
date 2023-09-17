import Image from "next/image";

export function Address() {
    return (
        <section className="flex items-center justify-start w-full text-[#E79C88] mt-24">
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
          {/* <a href="https://api.whatsapp.com/send/?phone=5541988245295&text&type=phone_number&app_absent=0" target='_blank'>(41) 98824-5295</a> */}
          <div className="flex flex-col items-start gap-5">
            <p>Endereço</p>
            <p className={`m-0 text-center text-[#E79C88]`}>
              R. Emanuel Kant, 60 - Sala 418 - Capão Raso, Curitiba - PR, 81020-670
            </p>
          </div>
        </section>
    )
}
