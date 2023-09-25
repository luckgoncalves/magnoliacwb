import { OfficeBeauty } from './OfficeBeauty'
import { Address } from './Address'
import { Services } from './Services'
import { About } from './About'
import { Scheduling } from './Scheduling'
import { Divider } from '../components/Divider'
import { CopyRight } from '../components/Copyright'
export default function Home() {
  return (

      <div className="w-full flex flex-col justify-around items-center text-center font-semibold text-[#E79C88]">
        <OfficeBeauty />
        <section className='w-full p-5 md:p-20'>
          <Services id="services" />
        </section>
        <section className='bg-white w-full p-5 md:p-20' >
          <About id="about"/>
          <Scheduling id="scheduling"/>
          <Divider />
          <Address />
        </section>
        <CopyRight />
      </div>

  )
}
