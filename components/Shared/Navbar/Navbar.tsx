/* eslint-disable @next/next/no-img-element */
"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MenuList } from "../MenuList/MenuList";
import { Heart, ShoppingCart, BaggageClaim } from "lucide-react";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import { ItemsMenuMobile } from "../ItemsMenuMobile/ItemsMenuMobile";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const router = useRouter();
  const { theme } = useTheme();
  const cart = useCart();

  return (
    <div className="flex items-center justify-between p-4 mx-auto  sm:max-w-4xl cursor-pointer">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        {theme === "dark" ? (
          <img
            src="/Logo Modo Oscuro.png"
            alt="Logo oscuro"
            width={100}
            height={50}
          />
        ) : (
          <img
            src="/Logo Modo Claro.png"
            alt="Logo claro"
            width={100}
            height={50}
          />
        )}
      </h1>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>

      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.shirts.length + cart.cups.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.shirts.length + cart.cups.length}</span>
          </div>
        )}

        <ToggleTheme />
      </div>
    </div>
  );
}
