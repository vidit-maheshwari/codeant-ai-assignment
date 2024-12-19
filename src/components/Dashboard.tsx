
// import * as React from 'react'
// import { Button } from "../../components/ui/button"
// import { Input } from "../../components/ui/input"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "../../components/ui/sheet"
// import { cn } from "../lib/utils"
// import { Menu, X, RefreshCw } from 'lucide-react'

// interface Repository {
//     name: string
//     language: string
//     size: string
//     visibility: 'Public' | 'Private'
//     updatedAt: string
//     languageColor: string
//   }
  
//   const repositories: Repository[] = [
//     {
//       name: "design-system",
//       language: "React",
//       size: "7320 KB",
//       visibility: "Public",
//       updatedAt: "1 day ago",
//       languageColor: "#61dafb"
//     },
//     {
//       name: "codeant-ci-app",
//       language: "JavaScript",
//       size: "5871 KB",
//       visibility: "Private",
//       updatedAt: "2 days ago",
//       languageColor: "#f7df1e"
//     },
//     {
//       name: "analytics-dashboard",
//       language: "Python",
//       size: "4521 KB",
//       visibility: "Private",
//       updatedAt: "5 days ago",
//       languageColor: "#3572A5"
//     },
//     {
//       name: "mobile-app",
//       language: "Swift",
//       size: "3096 KB",
//       visibility: "Public",
//       updatedAt: "3 days ago",
//       languageColor: "#ffac45"
//     },
//     {
//       name: "e-commerce-platform",
//       language: "Java",
//       size: "6210 KB",
//       visibility: "Private",
//       updatedAt: "6 days ago",
//       languageColor: "#b07219"
//     },
//     {
//       name: "blog-website",
//       language: "HTML/CSS",
//       size: "1876 KB",
//       visibility: "Public",
//       updatedAt: "4 days ago",
//       languageColor: "#e34c26"
//     },
//     {
//       name: "social-network",
//       language: "PHP",
//       size: "5432 KB",
//       visibility: "Private",
//       updatedAt: "7 days ago",
//       languageColor: "#4F5D95"
//     }
//   ]
  
//   const navItems = [
//     { name: "Repositories", icon: "📁" },
//     { name: "AI Code Review", icon: "🤖" },
//     { name: "Cloud Security", icon: "🔒" },
//     { name: "How to Use", icon: "📖" },
//     { name: "Settings", icon: "⚙️" },
//     { name: "Support", icon: "💬" },
//     { name: "Logout", icon: "🚪" },
//   ]
  
//   export default function Dashboard() {
//     const [selectedNav, setSelectedNav] = React.useState("Repositories")
    
//     return (
//       <div className="min-h-screen bg-background">
//         {/* Desktop Layout */}
//         <div className="hidden md:flex">
//           <aside className="w-64 border-r min-h-screen p-4 space-y-2">
//             <div className="font-semibold text-lg mb-6">CodeAnt AI</div>
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => setSelectedNav(item.name)}
//                 className={cn(
//                   "w-full text-left px-4 py-2 rounded-lg flex items-center gap-3",
//                   selectedNav === item.name ? "bg-secondary" : "hover:bg-secondary/50"
//                 )}
//               >
//                 <span>{item.icon}</span>
//                 {item.name}
//               </button>
//             ))}
//           </aside>
//           <main className="flex-1 p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-semibold">Repositories</h1>
//               <div className="flex items-center gap-4">
//                 <Button variant="outline" size="icon">
//                   <RefreshCw className="h-4 w-4" />
//                 </Button>
//                 <Button>Add Repository</Button>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <Input placeholder="Search Repositories" className="max-w-md" />
//               <div className="space-y-2">
//                 {repositories.map((repo) => (
//                   <div
//                     key={repo.name}
//                     className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="space-y-1">
//                         <div className="flex items-center gap-2">
//                           <span className="font-medium">{repo.name}</span>
//                           <span className="text-xs border rounded px-2 py-0.5">
//                             {repo.visibility}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <span className="flex items-center gap-1">
//                             <span
//                               className="w-3 h-3 rounded-full"
//                               style={{ backgroundColor: repo.languageColor }}
//                             />
//                             {repo.language}
//                           </span>
//                           <span>{repo.size}</span>
//                           <span>Updated {repo.updatedAt}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </main>
//         </div>
  
//         {/* Mobile Layout */}
//         <div className="md:hidden">
//           <header className="border-b p-4 flex items-center justify-between sticky top-0 bg-background z-50">
//             <div className="flex items-center gap-2">
//               <span className="font-semibold">CodeAnt AI</span>
//             </div>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="top" className="h-full w-full">
//                 <SheetHeader className="border-b pb-4 mb-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <span className="font-semibold">CodeAnt AI</span>
//                     </div>
//                     <SheetClose asChild>
//                       <Button variant="ghost" size="icon">
//                         <X className="h-5 w-5" />
//                       </Button>
//                     </SheetClose>
//                   </div>
//                 </SheetHeader>
//                 <nav className="space-y-1">
//                   {navItems.map((item) => (
//                     <SheetClose asChild key={item.name}>
//                       <button
//                         onClick={() => setSelectedNav(item.name)}
//                         className={cn(
//                           "w-full text-left px-4 py-3 flex items-center gap-3",
//                           selectedNav === item.name ? "bg-secondary" : "hover:bg-secondary/50"
//                         )}
//                       >
//                         <span>{item.icon}</span>
//                         {item.name}
//                       </button>
//                     </SheetClose>
//                   ))}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </header>
//           <main className="p-4">
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <Input placeholder="Search Repositories" className="max-w-[200px]" />
//                 <Button size="sm">Add Repository</Button>
//               </div>
//               <div className="space-y-2">
//                 {repositories.map((repo) => (
//                   <div
//                     key={repo.name}
//                     className="p-3 border rounded-lg hover:bg-secondary/50 transition-colors"
//                   >
//                     <div className="space-y-1">
//                       <div className="flex items-center justify-between">
//                         <span className="font-medium">{repo.name}</span>
//                         <span className="text-xs border rounded px-2 py-0.5">
//                           {repo.visibility}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <span className="flex items-center gap-1">
//                           <span
//                             className="w-2 h-2 rounded-full"
//                             style={{ backgroundColor: repo.languageColor }}
//                           />
//                           {repo.language}
//                         </span>
//                         <span>{repo.size}</span>
//                       </div>
//                       <div className="text-sm text-muted-foreground">
//                         Updated {repo.updatedAt}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     )
//   }
  
import * as React from 'react';
import Sidebar from './Sidebar';
import RepositoryList from './RepositoryList';
import MobileHeader from './MobileHeader';
import MobileContent from './MobileContent';

export default function Dashboard() {
  const [selectedNav, setSelectedNav] = React.useState("Repositories");

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <Sidebar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <main className="flex-1 p-6">
          <RepositoryList />
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <MobileHeader selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <MobileContent />
      </div>
    </div>
  );
}


