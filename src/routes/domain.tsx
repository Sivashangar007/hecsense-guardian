import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  BookOpen, AlertTriangle, HelpCircle, Target, Cog, Cpu,
} from "lucide-react";

export const Route = createFileRoute("/domain")({
  head: () => ({
    meta: [
      { title: "Research Domain — HECSense" },
      { name: "description", content: "Literature, research gap, problem, objectives, methodology and technologies behind HECSense." },
      { property: "og:title", content: "Research Domain — HECSense" },
      { property: "og:description", content: "Domain overview of the HECSense AI + IoT research project." },
    ],
  }),
  component: Domain,
});

const Card = ({ icon: Icon, title, children }: any) => (
  <div className="card-hover gradient-card rounded-2xl border border-border p-7 shadow-soft">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-display font-semibold">{title}</h3>
    </div>
    <div className="mt-4 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const methods = [
  { t: "Railway Vibration Sensing", d: "Sensor arrays + FSM event classification along tracks." },
  { t: "GPS Train Distance Analysis", d: "Real-time distance computation for safe intervention." },
  { t: "YOLOv8 Aggression Detection", d: "Vision model classifying elephant behavioural cues." },
  { t: "Distance-Based Farmland Repelling", d: "Adaptive non-harmful deterrents based on proximity." },
];

const tech = ["Arduino", "ESP32", "Python", "YOLOv8", "GPS", "IoT Sensors", "Web Dashboard", "Mobile App"];

function Domain() {
  return (
    <PageShell
      eyebrow="Domain"
      title="Research Domain & Methodology"
      intro="The scientific foundation, problem framing, and engineering approach behind HECSense."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card icon={BookOpen} title="Literature Survey">
          Existing research explores AI-based elephant detection, IoT early-warning systems,
          elephant aggression analysis, and railway collision prevention — but each operates in
          isolation without cross-component integration.
        </Card>
        <Card icon={AlertTriangle} title="Research Gap">
          Existing solutions focus only on isolated detection or alerting systems. There is no
          unified intelligent framework integrating elephant detection, aggression analysis,
          railway monitoring, train intervention, and farmland protection.
        </Card>
        <Card icon={HelpCircle} title="Research Problem">
          Human-elephant conflict and railway elephant collisions continue due to the lack of
          integrated real-time monitoring and automated intervention systems.
        </Card>
        <Card icon={Target} title="Research Objectives">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Detect elephants on railway tracks using vibration sensors</li>
            <li>Prevent train collisions using GPS-based smart train control</li>
            <li>Detect aggressive elephant behaviour using AI vision</li>
            <li>Protect farmland with distance-aware repelling mechanisms</li>
          </ul>
        </Card>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3 mb-6">
          <Cog className="h-6 w-6 text-brown" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold">Methodology</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => (
            <div key={m.t} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-sm font-semibold text-brown uppercase tracking-wider">Component</div>
              <h4 className="mt-2 font-display text-lg font-semibold">{m.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="h-6 w-6 text-brown" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold">Technologies Used</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-soft hover:border-primary hover:text-primary transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
