import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Download, Flag } from "lucide-react";

export const Route = createFileRoute("/milestones")({
  head: () => ({
    meta: [
      { title: "Milestones — HECSense" },
      { name: "description", content: "Project milestones, evaluations and assessment timeline for the HECSense research project." },
      { property: "og:title", content: "Milestones — HECSense" },
      { property: "og:description", content: "Timeline of HECSense research project milestones." },
    ],
  }),
  component: Milestones,
});

const milestones = [
  { name: "Project Proposal", date: "TBA", marks: "—", file: "files/proposal.pdf" },
  { name: "Progress Presentation 1", date: "TBA", marks: "—", file: "files/pp1.pdf" },
  { name: "Progress Presentation 2", date: "TBA", marks: "—", file: "files/pp2.pdf" },
  { name: "Final Assessment", date: "TBA", marks: "—", file: "files/final-assessment.pdf" },
  { name: "Viva", date: "TBA", marks: "—", file: "files/viva.pdf" },
];

function Milestones() {
  return (
    <PageShell
      eyebrow="Milestones"
      title="Project Timeline"
      intro="Key academic checkpoints, evaluations and deliverables across the research lifecycle."
    >
      <div className="relative">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
        <ol className="space-y-10">
          {milestones.map((m, i) => (
            <li key={m.name} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
              <div className={`pl-14 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                  <Flag className="h-3 w-3" />
                </div>
                <div className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brown">
                    Milestone {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-xl font-display font-semibold">{m.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                    <span><strong className="text-foreground">Date:</strong> {m.date}</span>
                    <span><strong className="text-foreground">Marks:</strong> {m.marks}</span>
                  </div>
                  <a
                    href={m.file}
                    download
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition"
                  >
                    {/* Replace with actual milestone file */}
                    <Download className="h-4 w-4" /> Download
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
