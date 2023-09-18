'use client'
import { SVGProps, useState } from "react";
import { NavItem } from "../NavItem/NavItem";

export function TablerMenu2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  )
}


export function MenuMobile() {
  const [open, setOpen] = useState(false);

  const isOpen = open ? 'translate-y-0 ' : '-translate-y-full ';
  return (
    //
    <nav className={`md:hidden fixed  top-0 z-10 left-0 w-full `}>
      <div className="flex items-center py-5 gap-4  bg-gradient-to-r from-[#FFE2DC]  to-[#FFF] relative z-20">
        <TablerMenu2 className="ml-5" onClick={() => setOpen(!open)} />
        <span className="text-black">Office Beauty</span>
      </div>
      <div className={`w-full h-screen bg-gradient-to-r from-[#FFE2DC]  to-[#FFF] z-10 delay-400 duration-500 ease-in-out transition-all transform  ${isOpen}`}>
        <ul className="flex flex-col ml-10 font-medium justify-start mt-0">
          <NavItem label='Serviços' href="services" active={false} />
          <NavItem label='Sobre nós' href="about" active={false} />
          <NavItem label='Agende um horário' href="Contact" active={false} />
        </ul>
      </div>
    </nav>
  )
}

export function Menu() {
  return (
    <nav className="hidden md:block fixed z-10 left-0 top-0 w-full font-semibold text-[#E79C88] pb-6 pt-5 bg-gradient-to-r from-white to-[#FFDAD2]">
          <div className="flex flex-wrap justify-center items-center mx-auto">
            <div className="justify-between items-center w-[96%] order-1 bg-white rounded-full p-2">
              <ul className="flex flex-row font-medium justify-center space-x-8 mt-0 rounded-full border-[1px] border-[#E79C88]">
                <NavItem label='Office Beauty' href="services" active={false} />
                <NavItem label='Serviços' href="services" active={false} />
                <NavItem label='Sobre nós' href="about" active={false} />
                <NavItem label='Agende um horário' href="Contact" active={false} />
              </ul>
            </div>
          </div>
        </nav>
  )
}
