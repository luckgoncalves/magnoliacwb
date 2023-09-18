import Image from "next/image";

export function Services() {
    return (
        <div className='w-full'>
          <div className="flex justify-center">
            <p className='flex text-3xl text-center font-light text-[#E79C88]'>Nossos serviços</p>
          </div>
          <div className="flex gap-10 w-full flex-col md:flex-row flex-wrap justify-center m-auto mt-10">
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100  md:w-[30%] h-[290px]"><span>Design Sobrancelhas</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px]"><span>Spá</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px]"><span>Piercing</span></div>

            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px]"><span>Tatuagens</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px]"><span>Manicure</span></div>
            <div className="rounded-[50px] flex justify-center items-center bg-slate-100 md:w-[30%] h-[290px]"><span>Cabelo</span></div>
          </div>
        </div>
    )
}
