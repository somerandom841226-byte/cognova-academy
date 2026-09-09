import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Bell,
  Check,
  CheckCheck,
  ChevronDown,
  ClipboardList,
  LogOut,
  Award,
  Settings,
  Trophy,
  User,
} from "lucide-react";
import { toast } from "sonner";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

type Notification = {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: typeof Bell;
  read: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: "n1",
    title: "New assignment posted",
    body: "AI Smart Kids – “Build your first chatbot” is due Friday.",
    time: "12 min ago",
    icon: ClipboardList,
    read: false,
  },
  {
    id: "n2",
    title: "Certificate ready",
    body: "Your Graphic Design Fundamentals certificate is available.",
    time: "2 hours ago",
    icon: Award,
    read: false,
  },
  {
    id: "n3",
    title: "You moved up the leaderboard",
    body: "You are now ranked #4 this week. Keep going!",
    time: "Yesterday",
    icon: Trophy,
    read: false,
  },
  {
    id: "n4",
    title: "Lesson feedback",
    body: "Your mentor left a comment on “Layout basics”.",
    time: "3 days ago",
    icon: Bell,
    read: true,
  },
];

export function StudentHeader() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);
  const unread = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markRead = (id: string) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );

  const signOut = () => {
    toast.success("Signed out", { description: "See you soon, Aarav!" });
    navigate({ to: "/login" });
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border/60 bg-background/70 px-3 backdrop-blur-xl sm:px-6">
      <SidebarTrigger />
      <p className="truncate text-sm font-semibold text-foreground/70">
        Student panel
      </p>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label={
                unread > 0 ? `Notifications, ${unread} unread` : "Notifications"
              }
              className="relative grid size-9 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-sky-soft"
            >
              <Bell className="size-4" />
              {unread > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full bg-coral px-1 text-[0.6rem] font-bold text-white">
                  {unread}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-[min(20rem,calc(100vw-1.5rem))] p-0">
            <div className="flex items-center justify-between gap-2 border-b border-border/60 px-3 py-2.5">
              <p className="text-sm font-bold">Notifications</p>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1 px-2 text-xs"
                onClick={markAllRead}
                disabled={unread === 0}
              >
                <CheckCheck className="size-3.5" />
                Mark all read
              </Button>
            </div>
            <ScrollArea className="max-h-80">
              <ul className="divide-y divide-border/50">
                {notifications.map((n) => (
                  <li key={n.id}>
                    <button
                      type="button"
                      onClick={() => markRead(n.id)}
                      className="flex w-full gap-3 px-3 py-3 text-left transition-colors hover:bg-secondary/60"
                    >
                      <span
                        className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full ${
                          n.read
                            ? "bg-secondary text-muted-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <n.icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-sm font-semibold">
                            {n.title}
                          </span>
                          {!n.read && (
                            <span className="size-1.5 shrink-0 rounded-full bg-coral" />
                          )}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {n.body}
                        </span>
                        <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground/70">
                          {n.time}
                        </span>
                      </span>
                      {n.read && (
                        <Check className="mt-1 size-3.5 shrink-0 text-muted-foreground/60" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label="My profile"
              className="flex items-center gap-2 rounded-full bg-secondary py-1 pl-1 pr-2 transition-colors hover:bg-sky-soft sm:pr-3"
            >
              <span className="grid size-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                AR
              </span>
              <span className="hidden text-sm font-semibold sm:inline">
                Aarav R.
              </span>
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="space-y-0.5">
              <p className="text-sm font-bold">Aarav R.</p>
              <p className="text-xs font-normal text-muted-foreground">
                aarav@cognova.academy
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/student/profile" className="flex items-center gap-2">
                <User className="size-4" />
                My profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/student/certificates" className="flex items-center gap-2">
                <Award className="size-4" />
                My certificates
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                to="/student/profile"
                hash="settings"
                className="flex items-center gap-2"
              >
                <Settings className="size-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={signOut} className="gap-2 text-destructive focus:text-destructive">
              <LogOut className="size-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
