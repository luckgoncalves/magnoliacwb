import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-white to-[#FFDAD2] p-24">
      <div className=" w-full flex flex-col-reverse md:flex-row justify-around items-center text-center font-semibold text-[#E79C88]">
        <div>
          <p className={`m-0 max-w-[30ch] text-center `}>
            Rua Emanuel Kant, 60, Sala 418 <br />Capão Raso, Curitiba - PR, 81020-670
          </p>        
          <a href="https://api.whatsapp.com/send/?phone=5541988245295&text&type=phone_number&app_absent=0" target='_blank'>(41) 98824-5295</a>
        </div>
        <div>
          <Image
            src="/images/womans-face-line-art.svg"
            alt="Woman"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </main>
  )
}
