import Image from 'next/image'
import { About } from './About'
import { Contact } from './Contact'
export default function Home() {
  return (

      <div className="w-full flex flex-col justify-around items-center text-center font-semibold text-[#E79C88]">
        <About />
        {/* <Contact /> */}
      </div>

  )
}
