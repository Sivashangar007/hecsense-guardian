import { createFileRoute, Link } from "@tanstack/react-router";
import { TrainFront, Train, Eye, Sprout, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-elephant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HECSense — Smart Monitoring & Repelling System for Elephants" },
      {
        name: "description",
        content:
          "AI + IoT framework reducing human-elephant conflict in Sri Lanka through railway detection, smart train control, aggression analysis and farmland protection.",
      },
      { property: "og:title", content: "HECSense — AI & IoT for Wildlife Conflict Mitigation" },
      {
        property: "og:description",
        content:
          "An integrated research framework for elephant detection, railway safety and farmland protection.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Train,
    title: "Railway Elephant Detection",
    desc: "Vibration sensing along tracks with FSM-based event recognition.",
  },
  {
    icon: TrainFront,
    title: "Smart Train Control",
    desc: "GPS-aware distance analysis to safely intervene approaching trains.",
  },
  {
    icon: Eye,
    title: "Aggression Detection",
    desc: "YOLOv8 vision pipeline classifying elephant behavioural cues.",
  },
  {
    icon: Sprout,
    title: "Farmland Monitoring",
    desc: "Distance-aware repelling to protect crops without harm.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-[72px] min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Asian elephant near a railway track in misty Sri Lankan jungle at sunrise"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              SLIIT · Final Year Research Project
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-semibold text-white text-balance leading-[1.05]">
              HECSense
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-display text-white/90 text-balance">
              Smart Monitoring &amp; Repelling System for Elephant Intrusions
            </p>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl text-balance">
              HECSense is an AI and IoT-based smart monitoring framework developed to reduce
              human-elephant conflict in Sri Lanka by combining railway elephant detection,
              smart train control, aggression analysis, and farmland intrusion prevention.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/domain"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-medium shadow-elevated hover:scale-[1.03] transition"
              >
                Explore Research <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-medium text-white hover:bg-white/10 transition"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto max-w-7xl px-6 -mt-20 relative z-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-hover gradient-card rounded-2xl border border-border p-6 shadow-soft"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-display font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="mx-auto max-w-7xl px-6 mt-28 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brown">
            About the Project
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-balance">
            An integrated AI + IoT framework for wildlife conflict mitigation and railway safety.
          </h2>
          <p className="mt-5 text-muted-foreground text-balance">
            Sri Lanka faces persistent human-elephant conflict and tragic railway collisions.
            HECSense unifies four research components — vibration-based detection, GPS train
            intervention, behavioural AI, and farmland repelling — into a single intelligent
            system designed for real-world deployment.
          </p>
          <Link
            to="/domain"
            className="inline-flex items-center gap-2 mt-7 text-primary font-medium hover:gap-3 transition-all"
          >
            View domain &amp; methodology <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "4", v: "Research Components" },
            { k: "AI + IoT", v: "Integrated Stack" },
            { k: "YOLOv8", v: "Vision Backbone" },
            { k: "SLIIT", v: "Faculty of Computing" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border p-6 bg-card shadow-soft"
            >
              <div className="text-3xl font-display font-semibold text-secondary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
