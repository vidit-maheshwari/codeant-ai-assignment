import React from 'react';
import { Button } from '../../components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '../../components/ui/sheet';
import { House, CodeXml, Cloud, Album, Settings, Phone, LogOut } from 'lucide-react';

interface MobileHeaderProps {
  selectedNav: string;
  setSelectedNav: (nav: string) => void;
}

const navItems = [
    { name: "Repositories", icon: <House /> },
    { name: "AI Code Review", icon: <CodeXml /> },
    { name: "Cloud Security", icon: <Cloud /> },
    { name: "How to Use", icon: <Album /> },
    { name: "Settings", icon: <Settings /> },
    { name: "Support", icon: <Phone /> },
    { name: "Logout", icon: <LogOut /> },
];

const MobileHeader: React.FC<MobileHeaderProps> = ({ selectedNav, setSelectedNav }) => (
  <header className="border-b p-4 flex items-center justify-between sticky top-0 bg-background z-50">
    <span className="font-semibold">CodeAnt AI</span>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full w-full">
        <SheetHeader className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">CodeAnt AI</span>
            <SheetClose asChild>
            </SheetClose>
          </div>
        </SheetHeader>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <SheetClose asChild key={item.name}>
              <button
                onClick={() => setSelectedNav(item.name)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 ${selectedNav === item.name ? "bg-secondary" : "hover:bg-secondary/50"}`}
              >
                <span>{item.icon}</span>
                {item.name}
              </button>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  </header>
);

export default MobileHeader;
