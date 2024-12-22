import {
    Sidebar,
    SidebarContent,
    SidebarHeader, SidebarMenu, SidebarMenuButton,
} from "@/components/ui/sidebar"
import {ModeToggle} from "@/components/theme-toggle";
import Link from "next/link";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <ModeToggle/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuButton>
                        <Link href={'/'}>Resource</Link>
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
