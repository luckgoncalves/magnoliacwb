import Image from "next/image";

export function OfficeBeauty() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row md:justify-between'>
          <div className="w-10/12 m-auto">
            <p className='left-0 flex text-5xl text-left font-light text-[#E79C88]'>A essência do cuidado feminino, refletindo sua beleza única.</p>
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
