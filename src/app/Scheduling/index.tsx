export function Scheduling() {
  const linkWhatsapp ='https://wa.me/5511989817883?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio';

  return (
    <section className="flex flex-col items-start justify-center border-[1px] border-[#526B53] bg-[#FFCDBC] rounded-[50px] mt-20 w-full">
      <div className=" w-full flex flex-col md:flex-row justify-between items-center p-20 ">
        <h2 className="text-4xl text-[#404040] font-light" >Agende um horário</h2>
        <a
        href={linkWhatsapp}
        target="_blank"
        rel="noreferrer"
        className="bg-[#526B53] py-5 px-20 rounded-lg text-[#FEC89A] hover:opacity-80 font-light">Whatsapp</a>
      </div>
    </section>

  )
}
