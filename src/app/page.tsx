import { OfficeBeauty } from './OfficeBeauty'
import { Address } from './Address'
import { Services } from './Services'
import { About } from './About'
import { Scheduling } from './Scheduling'
export default function Home() {
  return (

      <div className="w-full flex flex-col justify-around items-center text-center font-semibold text-[#E79C88]">
        <OfficeBeauty />
        <Services />
        <About />
        <Scheduling />
        <Address />
      </div>

  )
}
