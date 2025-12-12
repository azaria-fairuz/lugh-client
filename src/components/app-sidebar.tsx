import * as React from "react"
import { useLocation } from "react-router-dom"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Bot, Cctv, Construction } from "lucide-react"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarRail,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "admin",
    email: "admin@admin.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "none",
      logo: Construction,
      plan: "-",
    },
    {
      name: "NS-16",
      logo: Construction,
      plan: "EMP Bentu Ltd",
    }
  ],
  navMain: [
    {
      title: "Calibration",
      icon: Cctv,
      url: "/cctv-connection",
      isActive: true,
      items: [
        {
          title: "CCTV Connection",
          url: "/cctv-connection",
        },
        {
          title: "Gauge Calibration",
          url: "/gauge-calibration",
        },
        {
          title: "WITS Synchronization",
          url: "/data-synchronization",
        },
      ],
    },
    {
      title: "Gauge Detection",
      icon: Bot,
      url: "/data-monitoring",
      items: [
        {
          title: "Data Monitoring",
          url: "/data-monitoring",
        },
        {
          title: "Detection Histories",
          url: "/data-monitoring",
        }
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const navMain = data.navMain.map((section) => {
    const items = section.items?.map((item) => ({
      ...item,
      isActive: location.pathname === item.url,
    })) || [];

    const isActive = items.some((item) => item.isActive);

    return {
      ...section,
      items,
      isActive,
    };
  });

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
