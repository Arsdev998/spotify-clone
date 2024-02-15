"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Song } from "@/type";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const player =  usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <aside className={twMerge(`flex h-full`, player.activeId && "h-(calc(100vh-80px)")}>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[350px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-[80vh]">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="w-full flex-1 overflow-y-auto py-2">{children}</main>
    </aside>
  );
};

export default Sidebar;
