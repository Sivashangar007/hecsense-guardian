import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Presentation, Download } from "lucide-react";

export const Route = createFileRoute("/presentations")({
  head: () => ({
    meta: [
      { title: "Presentations — HECSense" },
      { name: "description", content: "Slides for proposal, progress and final presentations of the HECSense project." },
      { property: "og:title", content: "Presentations — HECSense" },
      { property: "og:description", content: "Download HECSense project presentation slides." },
    ],
  }),
  component: Presentations,
});

const slides = [
  { title: "Proposal Presentation", file: "slides/proposal.pptx" },
  { title: "Progress Presentation 1", file: "slides/pp1.pptx" },
  { title: "Progress Presentation 2", file: "slides/pp2.pptx" },
  { title: "Final Presentation", file: "slides/final.pptx" },
];

function Presentations() {
  return (
    <PageShell
      eyebrow="Presentations"
      title="Slides & Defenses"
      intro="Presentation decks delivered at each stage of the research."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {slides.map((s) => (
          <div key={s.title} className="card-hover gradient-card rounded-2xl border border-border p-7 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brown text-brown-foreground">
              <Presentation className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-display font-semibold">{s.title}</h3>
            <a
              href={s.file}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              {/* Replace with actual presentation file */}
              <Download className="h-4 w-4" /> Download Slides
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
