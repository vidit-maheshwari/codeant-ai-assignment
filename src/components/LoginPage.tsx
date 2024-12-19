

import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs"

import  Image1  from "../images/image1.png"
import  Image2  from "../images/image2.png"
import  Image3  from "../images/bunny_image.png"
import Image4 from "../images/logo_with_text.png"





export default function LoginPage() {

    return (
      <div className="min-h-screen w-full flex   p-4 ">
        <div className="flex flex-row items-center justify-center w-full max-w-[1200px] gap-6">

        <div className=" hidden md:flex  ml- relative mr-8 w-full h-full">
            <div className="image1 absolute   z-10 top-36 left-36   ">
                <img src={Image1} alt="" className="h-40 "/>
            </div>
            <div className="image2 absolute   z-20 top-64 right-24">
                <img src={Image2} alt="" className="h-44" />
            </div>
            <div className="image3 absolute bottom-0">
                <img src={Image3} alt="" />
            </div>
          </div>

          <Card className="w-full max-w-[400px] p-6 shadow-lg">
            <div className="space-y-6">

              <div className="text-center space-y-2">
                <div className="flex justify-center mb-2 w-full h-full ">
                  <img
                    src={Image4}
                    alt="CodeAnt AI"
                    width={100}
                    height={100}
                    className="h-10 w-28 p-1"
                  />
                </div>
                <h1 className="text-xl font-semibold">Welcome to CodeAnt AI</h1>
              </div>
  
         
  

              <Tabs defaultValue="saas" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
  <TabsTrigger
    value="saas"
    className="peer bg-gray-100 text-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
  >
    SAAS
  </TabsTrigger>
  <TabsTrigger
    value="self-hosted"
    className="peer bg-gray-100 text-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
  >
    Self Hosted
  </TabsTrigger>
</TabsList>

                <TabsContent value="saas" className="space-y-3 mt-3">
                  <Button 
                    variant="outline" 
                    className="w-full flex justify-center gap-2 h-12 px-4"
                  >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Sign in with Github
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex justify-center gap-2 h-12 px-4"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#2684FF">
  <path d="M3.26 2.33a1.5 1.5 0 0 0-1.47 1.73l2.82 16.82c.12.71.73 1.25 1.47 1.25h11.36a1.5 1.5 0 0 0 1.47-1.25l2.82-16.82a1.5 1.5 0 0 0-1.47-1.73H3.26Zm9.32 7.36h4.11l-.57 3.58a1.82 1.82 0 0 1-1.8 1.52h-4.56a1.82 1.82 0 0 1-1.8-1.52l-.57-3.58h4.19l.34 2.12a.5.5 0 0 0 .49.4h1.88a.5.5 0 0 0 .49-.4l.31-2.12Z"/>
</svg>

                    Sign in with Bitbucket
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex justify-center gap-2 h-12 px-4"
                  >
<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#azure-devops-color-16__paint0_linear_707_116)" d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"/><defs><linearGradient id="azure-devops-color-16__paint0_linear_707_116" x1="8" x2="8" y1="14.956" y2="1.026" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset=".16" stop-color="#1380DA"/><stop offset=".53" stop-color="#3C91E5"/><stop offset=".82" stop-color="#559CEC"/><stop offset="1" stop-color="#5EA0EF"/></linearGradient></defs></svg>

                    Sign in with Azure DevOps
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex justify-center gap-2 h-12 px-4"
                  >
<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#FC6D26" d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z"/><path fill="#E24329" d="M8 14.296l2.578-7.75H5.423L8 14.296z"/><path fill="#FC6D26" d="M8 14.296l-2.579-7.75H1.813L8 14.296z"/><path fill="#FCA326" d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z"/><path fill="#E24329" d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z"/><path fill="#FC6D26" d="M8 14.296l2.578-7.75h3.614L8 14.296z"/><path fill="#FCA326" d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z"/><path fill="#E24329" d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z"/></svg>

                    Sign in with GitLab
                  </Button>
                </TabsContent>
                <TabsContent value="self-hosted" className="space-y-3 mt-3">
                  <Button 
                    variant="outline" 
                    className="w-full flex justify-center gap-2 h-12 px-4"
                  >
            <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#FC6D26" d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z"/><path fill="#E24329" d="M8 14.296l2.578-7.75H5.423L8 14.296z"/><path fill="#FC6D26" d="M8 14.296l-2.579-7.75H1.813L8 14.296z"/><path fill="#FCA326" d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z"/><path fill="#E24329" d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z"/><path fill="#FC6D26" d="M8 14.296l2.578-7.75h3.614L8 14.296z"/><path fill="#FCA326" d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z"/><path fill="#E24329" d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z"/></svg>
                    Self Hosted GitLab
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex justify-center gap-2 h-12 px-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                    Sign in with SSO
                  </Button>
                </TabsContent>
              </Tabs>
  
              {/* Privacy Policy */}
              <div className="text-center text-sm text-muted-foreground">
                By signing up you agree to the{" "}
                <a href="#" className="underline hover:text-primary">
                  Privacy Policy
                </a>
              </div>
            </div>
          </Card>
     
        </div>
      </div>
    )
  }