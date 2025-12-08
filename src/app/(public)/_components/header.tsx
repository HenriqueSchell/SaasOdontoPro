'use client'
import { useState } from 'react'
import{ 
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { LogIn} from 'lucide-react'

export function Header(){
    const [isOpen , setIsOpen] = useState(false)
    const session =  null
    
    const navItems = [
        {href: '#clinicas', label: 'Clínicas'}
    ]

    const NavLinks = () => {
        
        return(
        <>
        {navItems.map((item) => (
            <Button key={item.href} asChild onClick={ () => setIsOpen(false)} className="bg-transparent hover:bg-transparent text-black shadow-none">
                <Link href={item.href} className='text-xl md:text-sm'>{item.label}</Link>
            </Button>
        ))}
        {session ? (<Link href="/dashboard" className='flex items-center justify-center gap-2'>Painel da Clínica</Link>) : (<Button className='mx-auto bg-emerald-500 cursor-pointer hover:bg-emerald-600 hover:scale-105 duration-500'><LogIn />Portal da Clínica</Button>)}
        </>)}


    return(
        <header className="fixed top-0 right-0 left-0 z-50 bg-white ">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="text-3xl font-bold text-zinc-900">Odonto<span className="text-emerald-500">PRO</span></Link>

                <nav className="hidden md:flex">
                    <NavLinks />
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent bg-transparent">
                            <Menu className="w-6 h-6" size="icon"></Menu>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-60 sm:w-[300px] z-50">

                    <SheetTitle className='mx-auto mt-10 text-2xl text-emerald-500'>Menu</SheetTitle>
                    <SheetHeader></SheetHeader>
                    <SheetDescription className='mx-auto text-lg text-gray-500'>Nossos Links!</SheetDescription>
                    <nav className="flex flex-col space-y-4 space-x-4 mt-6">
                        <NavLinks />
                    </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}