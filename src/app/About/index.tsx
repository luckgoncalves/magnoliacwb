export function About() {
  return (
    <section className="flex w-full flex-col items-start justify-center bg-slate-100 rounded-[50px] mt-20 h-[500px] bg-[url('/images/image-about.png')] bg-fixed">
      <div className="w-[60%] flex flex-col items-start ml-20 gap-4 ">
        <h2 className="text-4xl" >Sobre nós</h2>
        <p className="text-lg text-start text-white font-light w-[50%]">Somos um salão de beleza, com serviços de manicure, Pedicure, design de. sobrancelhas, henna, lavagem e hidratação de cabelos, aplicação de piercings.</p>
      </div>
    </section>
  )
}
