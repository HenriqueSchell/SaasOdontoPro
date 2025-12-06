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
export function Header(){
    const navItems = [
        {href: '#profissionais', label: 'Profissionais'},
        {href: '/contato', label: 'Contato'}
    ]

    const NavLinks = () => {
        <>
        {navItems.map((item) => (
            <Button key={item.href} className="bg-transparent hover:bg-transparent text-black shadow-none">
                <Link href={item.href}>{item.label}</Link>
            </Button>
        ))}
        </>
    }


    return(
        <header className="fixed top-0 right-0 left-0 z-50 bg-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="text-3xl font-bold text-zinc-900">Odonto<span className="text-emerald-500">PRO</span></Link>

                <nav className="hidden md:flex">
                    <NavLinks />
                </nav>

                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent bg-gray-300">
                            <Menu className="w-6 h-6" size="icon"></Menu>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-50">

                    <SheetTitle>Menu</SheetTitle>
                    <SheetHeader></SheetHeader>
                    <SheetDescription>Nossos Links!</SheetDescription>
                    <nav></nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}