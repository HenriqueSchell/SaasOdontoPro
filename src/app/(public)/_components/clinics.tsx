
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import clinicImage from "../../../../public/foto1.png"
import Link from "next/link"



export function Clinics(){
    return (
        <section id="clinicas" className="bg-gray-50 py-16 border-2 border-green-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl text-center mb-12 font-bold">Clínicas Disponíveis</h2>

                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardContent>
                            <div>
                                <div className="relative h-48">
                                    <Image src={clinicImage} alt="Imagem da clínica" fill className="object-contain"/>
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3>Henrique Schell</h3>
                                        <p>Rua X, Centro, Capão da Canoa - RS</p>
                                    </div>
                                    <div className="flex w-2.5 h-2.5 rounded-full bg-emerald-500"></div>

                                </div>
                                    <Link href="/clinica/123" className="flex w-full bg-emerald-500 hover:bg-emerald-600 hover:scale-105 duration-500 rounded-lg py-1 justify-center text-lg text-white">Agendar Horário</Link>
                            </div>
                        </CardContent>
                    </Card>

                </section>
            </div>



        </section>
    )
}