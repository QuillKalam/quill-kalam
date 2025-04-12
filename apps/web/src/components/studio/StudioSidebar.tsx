import {
  Notebook,
  Map,
  PersonStanding,
  Workflow,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

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

export function StudioSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="">
        <Card className="h-full rounded-none">
          <SidebarGroup>
            <CardHeader>
              <SidebarGroupLabel>
                <Link href="/" className="mr-4">
                  <Image
                    src="/logov3.png"
                    width={200}
                    height={480}
                    alt="Picture of the Quillkalam logo"
                    className="mix-blend-multiply"
                  />
                </Link>
              </SidebarGroupLabel>
            </CardHeader>
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
          </SidebarGroup>
        </Card>
      </SidebarContent>
    </Sidebar>
  );
}
