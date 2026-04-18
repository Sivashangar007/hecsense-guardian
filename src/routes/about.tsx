import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Mail, User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — HECSense" },
      { name: "description", content: "Meet the HECSense research team and supervisors at SLIIT Faculty of Computing." },
      { property: "og:title", content: "About Us — HECSense" },
      { property: "og:description", content: "The team behind HECSense — students and supervisors." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Sivashangar S", role: "Component 1 — Railway Detection", email: "sivashangar@example.com", img: "images/member1.jpg" },
  { name: "Perera K.A.T.M", role: "Component 2 — Smart Train Control", email: "perera@example.com", img: "images/member2.jpg" },
  { name: "Keerthana S", role: "Component 3 — Aggression Detection", email: "keerthana@example.com", img: "images/member3.jpg" },
  { name: "Harshika M", role: "Component 4 — Farmland Monitoring", email: "harshika@example.com", img: "images/member4.jpg" },
];

const supervisors = [
  { name: "Samantha Rajapaksha", role: "Supervisor", email: "samantha@sliit.lk", img: "images/supervisor1.jpg" },
  { name: "Harshanath SMB", role: "Co-Supervisor", email: "harshanath@sliit.lk", img: "images/supervisor2.jpg" },
];

const Profile = ({ p }: { p: typeof team[number] }) => (
  <div className="card-hover gradient-card rounded-2xl border border-border p-6 shadow-soft text-center">
    <div className="mx-auto h-28 w-28 rounded-full overflow-hidden border-4 border-background shadow-elevated bg-muted flex items-center justify-center">
      {/* Replace with actual team image */}
      <img src={p.img} alt={p.name} className="h-full w-full object-cover" onError={(e) => ((e.currentTarget.style.display = "none"))} />
      <User className="h-10 w-10 text-muted-foreground" />
    </div>
    <h3 className="mt-5 font-display font-semibold text-lg">{p.name}</h3>
    <div className="text-sm text-brown font-medium mt-1">{p.role}</div>
    <a href={`mailto:${p.email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-secondary hover:underline">
      <Mail className="h-4 w-4" /> {p.email}
    </a>
  </div>
);

function About() {
  return (
    <PageShell
      eyebrow="About Us"
      title="The People Behind HECSense"
      intro="A multidisciplinary research team from SLIIT Faculty of Computing."
    >
      <h2 className="text-2xl font-display font-semibold mb-6">Team Members</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((p) => <Profile key={p.name} p={p} />)}
      </div>

      <h2 className="text-2xl font-display font-semibold mt-16 mb-6">Supervisors</h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
        {supervisors.map((p) => <Profile key={p.name} p={p} />)}
      </div>
    </PageShell>
  );
}
