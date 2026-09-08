import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { StudentSidebar } from "@/components/student/student-sidebar";

export const Route = createFileRoute("/student")({
  component: StudentLayout,
});

function StudentLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-mist">
        <StudentSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border/60 bg-background/70 px-3 backdrop-blur-xl sm:px-6">
            <SidebarTrigger />
            <p className="truncate text-sm font-semibold text-foreground/70">
              Student panel
            </p>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                aria-label="Notifications"
                className="relative grid size-9 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-sky-soft"
              >
                <Bell className="size-4" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-coral" />
              </button>
              <div className="flex items-center gap-2 rounded-full bg-secondary py-1 pl-1 pr-3">
                <span className="grid size-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  AR
                </span>
                <span className="hidden text-sm font-semibold sm:inline">
                  Aarav R.
                </span>
              </div>
            </div>
          </header>

          <main className="flex-1 px-3 py-5 sm:px-6 sm:py-8">
            <div className="mx-auto w-full max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
