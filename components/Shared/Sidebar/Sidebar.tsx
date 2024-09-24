import Link from "next/link";
import { SidebarRoutes } from "../SidebarRoutes/SidebarRoutes";

export  function Sidebar() {
  return (
    <>
        <div className="py-6">
        <Link href="/">
            <h1 className="text-xl font-bold">
                Shopys Admin
            </h1>
        </Link>
        </div>
        <SidebarRoutes/>
    </>
  )
}
