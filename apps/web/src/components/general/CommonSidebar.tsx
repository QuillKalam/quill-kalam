"use client";
import {
  Notebook,
  Map,
  PersonStanding,
  Workflow,
  Settings,
  Menu,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Card, CardContent } from "../ui/card";
import StudioSidebar from "../studio/StudioSidebar";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

// Menu items.
const items = [
  {
    title: "Author Notes",
    url: "#",
    icon: Notebook,
  },
  {
    title: "Maps",
    url: "#",
    icon: Map,
  },
  {
    title: "Characters",
    url: "#",
    icon: PersonStanding,
  },
  {
    title: "Plots",
    url: "#",
    icon: Workflow,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function CommonSidebar() {
  const { openMobile, setOpenMobile, isMobile } = useSidebar();
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  // Mobile menu toggle handler
  const handleMobileToggle = () => {
    setOpenMobile(!openMobile);
  };

  return (
    <>
      {/* Mobile trigger that appears outside the sidebar */}
      {isMobile && (
        <Button
          variant="ghost"
          className="fixed top-8 left-4  z-50 md:hidden"
          onClick={handleMobileToggle}
        >
          <Menu />
        </Button>
      )}

      <Sidebar
        collapsible="icon"
        className={
          isMobile
            ? "fixed inset-y-0 left-0 z-40 transform transition-transform duration-200 ease-in-out"
            : ""
        }
        // Apply transform based on mobile state
        style={
          isMobile && !openMobile ? { transform: "translateX(-100%)" } : {}
        }
      >
        <SidebarContent>
          {!isMobile && (
            <SidebarTrigger
              className="flex items-center justify-center w-10 h-10 p-0 rounded-none bg-transparent hover:bg-transparent focus:bg-transparent focus:shadow-none"
              aria-label="Toggle sidebar"
              size="lg"
            />
          )}
          <Card className="h-full rounded-none p-0">
            <SidebarGroup>
              {!isStudio ? (
                <CardContent className="p-0">
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CardContent>
              ) : (
                <StudioSidebar />
              )}
            </SidebarGroup>
          </Card>
        </SidebarContent>
      </Sidebar>

      {/* Overlay to close sidebar on mobile when clicked outside */}
      {isMobile && openMobile && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setOpenMobile(false)}
        />
      )}
    </>
  );
}
