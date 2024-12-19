import React from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { RotateCw } from 'lucide-react';

const repositories = [
    {
              name: "design-system",
              language: "React",
              size: "7320 KB",
              visibility: "Public",
              updatedAt: "1 day ago",

            },
            {
              name: "codeant-ci-app",
              language: "JavaScript",
              size: "5871 KB",
              visibility: "Private",
              updatedAt: "2 days ago",
            
            },
            {
              name: "analytics-dashboard",
              language: "Python",
              size: "4521 KB",
              visibility: "Private",
              updatedAt: "5 days ago",
          
            },
            {
              name: "mobile-app",
              language: "Swift",
              size: "3096 KB",
              visibility: "Public",
              updatedAt: "3 days ago",
             
            },
            {
              name: "e-commerce-platform",
              language: "Java",
              size: "6210 KB",
              visibility: "Private",
              updatedAt: "6 days ago",
             
            },
            {
              name: "blog-website",
              language: "HTML/CSS",
              size: "1876 KB",
              visibility: "Public",
              updatedAt: "4 days ago",
             
            },
            {
              name: "social-network",
              language: "PHP",
              size: "5432 KB",
              visibility: "Private",
              updatedAt: "7 days ago",
            }
];

const RepositoryList: React.FC = () => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Repositories</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline" className='w-full p-2' size="icon"><RotateCw />Refresh All</Button>
        <Button>Add Repository</Button>
      </div>
    </div>
    <div className="space-y-6">
      <Input placeholder="Search Repositories" className="max-w-md" />
      <div className="space-y-2">
        {repositories.map((repo) => (
          <div key={repo.name} className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{repo.name}</span>
                  <span className="text-xs border rounded px-2 py-0.5 text-blue-600 bg-blue-100">{repo.visibility}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-blue-500"  />
                    {repo.language}
                  </span>
                  <span>{repo.size}</span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default RepositoryList;
