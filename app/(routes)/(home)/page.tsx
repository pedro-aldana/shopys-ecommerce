

import { db } from "@/lib/db";
import { FeaturedProducts } from "@/components/Shared/FeaturedProducts/FeaturedProducts";
import { BannerDiscount } from "@/components/Shared/BannerDiscount/BannerDiscount";
import { ChooseCategory } from "@/components/Shared/ChooseCategory/ChooseCategory";
import { BannerProducts } from "@/components/Shared/BannerProducts/BannerProducts";
import { FeaturedCups } from "@/components/Shared/FeaturedCups/FeaturedCups";



export default async function Home() {


  const shirts = await db.shirt.findMany({
    where:{
      isFeatured: true,
    },
  });

  const cups = await db.cup.findMany({
    where:{
      isFeatured: true,
    }
  }) 
  
  const categories = await db.category.findMany()
  

  return (
    <div>
      <BannerDiscount/>
      <ChooseCategory categories={categories}/>
      <FeaturedProducts shirts={shirts}/>
      <FeaturedCups cups={cups}/>
      <BannerProducts/>
    </div>
  )
}
