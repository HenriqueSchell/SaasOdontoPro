
import { Button } from "@/components/ui/button"
import Image from "next/image"
import doctorImg from '../../../../public/doctor-hero.png'
export function Hero(){
    return(
        <section className="bg-white mt-18">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">

                <main className="flex items-center justify-center">
                    <article className="space-y-8 flex[2] flex-col pb-2 md:pb-0">
                        <h1 className="text-3xl md:text-4xl font-bold max-w-2xl tracking-tight">Encontre os melhores profissionais em um único local!</h1>
                        <p className="text-lg md:text-lg text-gray-600 max-w-lg text-justify">Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimentode forma simplificada e organizada.</p>
                        <Button className="bg-emerald-500 hover:bg-emerald-600 hover:scale-105 duration-500 w-fit px-6 font-semibold cursor-pointer">Encontre uma Clínica</Button>
                    </article>

                    <div className="hidden lg:block">
                        <Image src={doctorImg} alt="Foto Ilustrativa profissional da saúde" width={340} height={400} quality={100} priority/>
                    </div>
                </main>

            </div>
        </section>
    )
}