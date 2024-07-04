'use client'
import { SVGProps, useState } from "react";
import { NavItem } from "../NavItem/NavItem";

export function TablerMenu2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  )
}


export function MenuMobile() {
  const [open, setOpen] = useState(false);

  const isOpen = open ? 'translate-y-0  bg-gradient-to-r from-[#FFE2DC]  to-[#FFF]' : '-translate-y-full bg-transparent';
  return (
    <nav className={`sm:hidden absolute  top-0 z-10 left-0 w-full `}>
      <div className={`flex items-center py-5 gap-4 ${open ? 'bg-gradient-to-r from-[#FFE2DC]  to-[#FFF]': 'bg-transparent'} bg-transparent relative z-20`}>
        <TablerMenu2 className="ml-5" onClick={() => setOpen(!open)} />
        <span className="text-white text-2xl">Magnolia</span>
      </div>
      <div className={`w-full h-screen z-10 delay-400 duration-500 ease-in-out transition-all transform  ${isOpen}`}>
        <ul className="flex flex-col ml-10 font-medium justify-start mt-0">
          <NavItem label='Serviços' href="services" onClick={() => setOpen(!open)} active={false} />
          <NavItem label='Sobre nós' href="about" onClick={() => setOpen(!open)}  active={false} />
          <NavItem label='Agende um horário' href="scheduling" onClick={() => setOpen(!open)}  active={false} />
        </ul>
      </div>
    </nav>
  )
}

export function Menu() {
  return (
    <nav className="hidden absolute sm:block  z-10 left-0 top-0 w-full font-semibold text-[#E79C88] pb-6 pt-5 bg-transparent">
          <div className="flex flex-wrap justify-center items-center mx-auto">
            <div className="justify-between items-center w-[96%] order-1 bg-white rounded-full p-2">
              <ul className="flex flex-row font-medium justify-center space-x-8 mt-0 rounded-full border-[1px] border-[#E79C88]">
                <NavItem label='Magnolia' href="#magnolia" active={false} />
                <NavItem label='Serviços' href="services" active={false} />
                <NavItem label='Sobre nós' href="about" active={false} />
                <NavItem label='Agende um horário' href="scheduling" active={false} />
              </ul>
            </div>
          </div>
        </nav>
  )
}
