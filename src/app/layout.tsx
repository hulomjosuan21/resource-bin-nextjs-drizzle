import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AddResource from "@/app/add-resource";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Josuan | Resource",
  description: "My collection of links and codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider className="grid sm:grid-cols-[auto,1fr] grid-cols-1">
            <AppSidebar />
            <main className={'relative'}>
              <header className={'sticky top-0 z-10 bg-background flex p-2 justify-between'}>
                <SidebarTrigger />
                <AddResource />
              </header>
              {children}
            </main>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
