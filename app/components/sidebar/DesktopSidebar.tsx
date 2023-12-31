"use client";

import { useState } from "react";

import DesktopItem from "./DesktopItem";
import useRoutes from "@/app/hooks/useRoutes";
import { User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";
import SettingsModal from "@/app/components/sidebar/SettingsModal";

interface DesktopSidebar {
  currentUser: User;
}

const DesktopSidebar = ({ currentUser }: DesktopSidebar) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  console.log({ currentUser });

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
      hidden
      lg:fixed
      lg:inset-y-0
      lg:left-0
      lg:z-40
      lg:w-20
      xl:px-6
      lg:overflow-y-auto
      lg:bg-gray-200
      dark:lg:bg-gray-950
      lg:border-r-[1px]
      lg:border-r-gray-300
      dark:lg:border-r-gray-800
      lg:pb-4
      lg:flex
      lg:flex-col
      justify-between"
      >
        <nav className="mt-4 flex flex-col justify-between">
          <ul className="flex flex-col items-center space-y-1">
            {routes.map((route) => (
              <DesktopItem
                key={route.label}
                href={route.href}
                label={route.label}
                icon={route.icon}
                active={route.active}
                onClick={route.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col items-center justify-between">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
