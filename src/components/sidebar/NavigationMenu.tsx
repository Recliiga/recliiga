import { Link, useLocation } from "react-router-dom";
import { Home, Trophy, Calendar, BarChart, MessageSquare } from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useChatContext } from "@/contexts/ChatContext";
import { Badge } from "../ui/badge";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Leagues",
    icon: Trophy,
    url: "/dashboard/leagues",
  },
  {
    title: "Events",
    icon: Calendar,
    url: "/dashboard/events",
  },
  {
    title: "Results",
    icon: BarChart,
    url: "/dashboard/results",
  },
  {
    title: "Chat",
    icon: MessageSquare,
    url: "/dashboard/chat",
  },
];

export function NavigationMenu({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const location = useLocation();
  const { unreadMessages } = useChatContext();

  return (
    <SidebarContent className="flex-none">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive}
                  >
                    <Link
                      to={item.url}
                      onClick={toggleSidebar}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm ${
                        isActive
                          ? "bg-orange-50 font-medium text-accent-orange"
                          : "text-gray-600 hover:bg-gray-50 hover:text-accent-orange"
                      }`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${isActive ? "text-accent-orange" : "text-gray-500"}`}
                      />
                      <span>{item.title}</span>
                      {item.title === "Chat" && unreadMessages.length > 0 && (
                        <Badge className="bg-accent-orange hover:bg-accent-orange">
                          {unreadMessages.length > 9
                            ? `9+`
                            : unreadMessages.length}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
