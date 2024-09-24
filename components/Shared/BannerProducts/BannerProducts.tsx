import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function BannerProducts() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-24 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/pared.png')" }}>
      {/* Sección de texto a la izquierda */}
      <div className="lg:w-1/2 p-4 text-center lg:text-left mx-12">
        <h4 className="text-5xl font-extrabold uppercase text-white">Mug Mágico</h4>
        <p className="my-2 text-4xl bg-black/50 rounded-lg p-4 text-white">
          Disfruta tus bebidas calientes al lado de personajes que amas
        </p>
        
      </div>
      
      {/* Sección de video a la derecha */}
      <div className="lg:w-1/2 mt-5 lg:mt-0 h-[350px] lg:h-[500px]">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1010427728?h=5505ef725b"
          className="w-full h-full rounded-md"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
       
      </div>
    </div>
  );
}
