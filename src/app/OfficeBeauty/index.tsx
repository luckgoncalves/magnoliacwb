import Image from "next/image";

export function OfficeBeauty() {
    return (
      <>
        <div className="w-full h-[50vh] sm:h-[95vh] flex flex-col-reverse rounded-b-[200px] sm:rounded-b-[88px] top-0 sm:flex-row sm:justify-between bg-[url('/images/m-capa.png')] sm:bg-[url('/images/capa-1200.png')] sm:bg-cover bg-no-repeat">
        <div className="hidden sm:block m-auto">
            <p className='left-0 flex text-5xl text-left font-light sm:w-[50%] text-[#fff]'>Onde a sua beleza e individualidade são nossa inspiração.</p>
          </div>
        </div>
          <div className="sm:hidden m-auto">
            <p className='flex text-xl text-center font-light px-8 text-[#404040]'>Onde a sua beleza e individualidade são nossa inspiração.</p>
          </div>
      </>
    )
}
