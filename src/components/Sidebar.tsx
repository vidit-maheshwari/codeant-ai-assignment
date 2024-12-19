import React from 'react';
import { cn } from '../lib/utils';
import { House, CodeXml, Cloud, Album, Settings, Phone, LogOut } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu";
  import Image1 from "../images/logo_with_text.png";

const navItem1 = [
  { name: "Repositories", icon: <House /> },
  { name: "AI Code Review", icon: <CodeXml /> },
  { name: "Cloud Security", icon: <Cloud /> },
  { name: "How to Use", icon: <Album /> },
  { name: "Settings", icon: <Settings /> },
];

const navItem2 = [
  { name: "Support", icon: <Phone /> },
  { name: "Logout", icon: <LogOut /> },
];

interface SidebarProps {
  selectedNav: string;
  setSelectedNav: (nav: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedNav, setSelectedNav }) => (
  <aside className="w-64 border-r min-h-screen p-4 flex flex-col justify-between sticky top-0">
    <div className="space-y-2 flex flex-col items-center">
      

    <div className="space-y-4 flex flex-col items-center">

    <img className="h-12 w-30  mb-4" src={Image1} alt="Profile" />
    

    <div className="flex justify-center w-40">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full text-black text-center text-md font-semibold px-4 py-2 rounded-lg border-2 border-gray-200 focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap">
          ViditMaheshwari
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-lg rounded-lg mt-2 w-full">
          <DropdownMenuLabel className="px-4 py-2 text-gray-700">Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile1</DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile2</DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
      <div >
        {navItem1.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelectedNav(item.name)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-lg flex items-center gap-3",
              selectedNav === item.name ? "bg-blue-500 text-white" : "hover:bg-secondary/50"
            )}
          >
            <span>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>
    </div>

    

    {/* Bottom items (Support and Logout) */}
    <div className="mt-auto justify-center flex flex-col items-center">
      {navItem2.map((item) => (
        <button
          key={item.name}
          onClick={() => setSelectedNav(item.name)}
          className={cn(
            "w-full text-left px-4 py-2 rounded-lg flex items-center gap-3",
            selectedNav === item.name ? "bg-blue-500 text-white" : "hover:bg-secondary/50"
          )}
        >
          <span>{item.icon}</span>
          {item.name}
        </button>
      ))}
    </div>
  </aside>
);

export default Sidebar;
