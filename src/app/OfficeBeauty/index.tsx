import Image from "next/image";

export function OfficeBeauty() {
    return (
      <>
        <div className="w-full h-[50vh] md:h-[95vh] flex flex-col-reverse rounded-b-[200px]  md:rounded-b-[88px] top-0 md:flex-row md:justify-between bg-[url('/images/m-capa.png')] md:bg-[url('/images/capa.png')] bg-no-repeat">
        <div className="hidden md:block m-auto">
            <p className='left-0 flex text-5xl text-left font-light md:w-[50%] text-[#fff]'>A essência do cuidado feminino, refletindo sua beleza única.</p>
          </div>
        </div>
          <div className="md:hidden m-auto">
            <p className='flex text-xl text-center font-light px-8 text-[#404040]'>A essência do cuidado feminino, refletindo sua beleza única.</p>
          </div>
      </>
    )
}
