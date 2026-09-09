import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Award, Flame, Mail, MapPin, Save, Trophy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/student/profile")({
  component: StudentProfile,
  head: () => ({
    meta: [
      { title: "My Profile – CogNova Academy Student Panel" },
      {
        name: "description",
        content:
          "View and update your CogNova Academy student profile, learning stats and notification preferences.",
      },
      { property: "og:title", content: "My Profile – CogNova Academy" },
      {
        property: "og:description",
        content:
          "Manage your CogNova Academy student details, learning stats and alert preferences.",
      },
    ],
  }),
});

const stats = [
  { label: "Courses enrolled", value: "3", icon: BookOpen },
  { label: "Certificates", value: "1", icon: Award },
  { label: "Day streak", value: "12", icon: Flame },
  { label: "Leaderboard rank", value: "#4", icon: Trophy },
];

function StudentProfile() {
  const [form, setForm] = useState({
    name: "Aarav R.",
    email: "aarav@cognova.academy",
    location: "Bengaluru, India",
    bio: "Curious learner exploring AI and design at CogNova Academy.",
  });
  const [prefs, setPrefs] = useState({
    assignments: true,
    certificates: true,
    weekly: false,
  });

  const save = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success("Profile saved", {
      description: "Your details are updated for this session.",
    });
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-primary p-5 text-primary-foreground sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-primary-foreground/15 text-xl font-extrabold sm:size-20 sm:text-2xl">
            AR
          </span>
          <div className="min-w-0">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {form.name}
            </h1>
            <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1.5">
                <Mail className="size-4" /> {form.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4" /> {form.location}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border/60 bg-background p-4"
          >
            <span className="grid size-9 place-items-center rounded-full bg-secondary text-primary">
              <s.icon className="size-4" />
            </span>
            <p className="mt-3 text-2xl font-extrabold">{s.value}</p>
            <p className="text-xs font-semibold text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        <form
          onSubmit={save}
          className="space-y-4 rounded-3xl border border-border/60 bg-background p-5 sm:p-6 lg:col-span-2"
        >
          <h2 className="text-lg font-bold">Personal details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="bio">About me</Label>
              <Textarea
                id="bio"
                rows={4}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
              />
            </div>
          </div>
          <Button type="submit" className="gap-2 rounded-full">
            <Save className="size-4" />
            Save changes
          </Button>
        </form>

        <section
          id="settings"
          className="space-y-4 rounded-3xl border border-border/60 bg-background p-5 sm:p-6"
        >
          <h2 className="text-lg font-bold">Notification settings</h2>
          {(
            [
              ["assignments", "Assignment reminders"],
              ["certificates", "Certificate updates"],
              ["weekly", "Weekly progress digest"],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="flex items-center justify-between gap-3">
              <Label htmlFor={key} className="text-sm font-semibold">
                {label}
              </Label>
              <Switch
                id={key}
                checked={prefs[key]}
                onCheckedChange={(checked) => {
                  setPrefs((p) => ({ ...p, [key]: checked }));
                  toast(`${label} ${checked ? "on" : "off"}`);
                }}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
