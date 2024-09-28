import Link from "next/link";
import FloatedSearch from "./components/FloatedSearch";

export function BannerDiscount() {
  return (
    <div className="container relative mx-auto mt-12">
      <div className="pt-20 md:pt-0 min-h-[80vh] bg-[url('/images/patron.jpg')] bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
        {/* Fondo oscuro con opacidad */}
        <div className="absolute inset-0 bg-black/70 rounded-3xl"></div>
        
        {/* Contenido del banner */}
        <div className="max-w-3xl text-center text-white z-10">
          <h3 className="text-4xl md:text-5xl font-semibold">Bienvenidos a la tienda Shopys</h3>
          <p className="mt-2 text-xl md:text-2xl md:mt-8">
            Personalizamos todas tus ideas, sublimación y publicidad
          </p>
        </div>

        {/* Componente flotante */}
        <FloatedSearch />
      </div>
    </div>
  );
}
