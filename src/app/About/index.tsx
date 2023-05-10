import Image from "next/image";

export function About() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row md:justify-between'>
          <div className="w-1/2 m-auto md:mt-12">
            <h1 className="text-3xl left-0 top-0 flex w-full font-serif font-semibold text-[#E79C88] pb-6 pt-8">
              OFFICE BEAUTY
            </h1>
            <p className='left-0 flex text-[#E79C88]'>Rua Emanuel Kant, 60, Sala 418 - Capão Raso, Curitiba - PR, 81020-670</p>
          </div>
          <Image
            src="/images/womans-face-line-art.svg"
            alt="Woman"
            className="opacity-30 md:opacity-70 top-20 md:top-0 fixed md:relative"
            priority
            width="500"
            height={200}
          />
        </div>
    )
}
