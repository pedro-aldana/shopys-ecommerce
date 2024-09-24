"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ProductCard } from "../components/ProductCard/ProductCard"

export default function CategoryCupPage() {

  const params = useParams()
  const router = useRouter()


  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h1 className="text-3xl font-medium">Mugs</h1>

        <div className="sm:flex sm:justify-between">

          <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
              <ProductCard/>
          </div>

        </div>
    </div>
  )
}
