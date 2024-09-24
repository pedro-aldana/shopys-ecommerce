import Link from "next/link";
import FloatedSearch from "./components/FloatedSearch";


export  function BannerDiscount() {
  return (
    <div className="container relative mx-auto mt-12">
        <div className="pt-20 md:pt-0 min-h-[80vh] bg-[url('/images/patron.jpg')]  bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
        <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>
            <div className="max-2-3xl text-center text-white z-10">
            <h3 className="text-5xl font-semibold">Bienvenidos a la tienda Shopys</h3>
            <p className="mt-2 text-2xl md:mt-8">Personalizamos todas tus ideas, sublimacion y publicidad</p>
            </div>
            

            <FloatedSearch/>
        </div>
        
    </div>
  )
}
