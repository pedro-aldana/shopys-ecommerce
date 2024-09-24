/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";

import { Category } from "@prisma/client";

export type ChooseCategoryProps = {
  categories: Category[];
}

export  function ChooseCategory(props:ChooseCategoryProps) {


  const {categories} = props

  

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoria favorita</h3> 

        <div className="grid gap-5 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
          >
            <img
              src={`${category.image}`}
              alt={category.name}
              className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
            />
            <p className="absolute w-full py-2 text-xl font-bold text-center text-black bottom-5 backdrop-blur-lg">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
