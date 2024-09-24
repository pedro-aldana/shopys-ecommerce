import { Menu } from "lucide-react";
import { PopoverContent,PopoverTrigger,Popover } from "@/components/ui/popover";
import Link from "next/link";


export  function ItemsMenuMobile() {
  return (
    <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/" className="block mb-2">Inicio</Link>
                <Link href="/personalization" className="block mb-2">Personalizacion</Link>
                <Link href="/catalog/anime" className="block mb-2">Catalogo Mugs Anime</Link>
                <Link href="/catalog/movies" className="block mb-2">Catalogo Mugs Peliculas</Link>
                <Link href="/catalog/professions" className="block mb-2">Catalogo Mugs Profesiones</Link>
                <Link href="/catalog/games" className="block">Catalogo Mugs Video Juegos</Link>
            </PopoverContent>
        </Popover>
  )
}
