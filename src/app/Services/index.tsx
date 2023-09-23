import Image from "next/image";

export function Services() {
    return (
        <div className='w-full'>
          <div className="flex justify-center">
            <p className='flex text-3xl text-center font-light text-[#E79C88]'>Nossos serviços</p>
          </div>
          <div className="flex gap-10 w-full flex-col md:flex-row flex-wrap justify-center m-auto mt-10">
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100  md:w-[30%] h-[290px] bg-[url('/images/eyebrow.png')] "><span>Design Sobrancelhas</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/spa.png')]"><span>Spá</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/piercing.png')]"><span>Piercing</span></div>

            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/eyelash.png')]"><span>Tatuagens</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/manicure.png')]"><span>Manicure</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/hair.png')]"><span>Cabelo</span></div>
          </div>
        </div>
    )
}
