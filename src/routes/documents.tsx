import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — HECSense" },
      { name: "description", content: "Download project documents: charter, proposal, status reports and final report." },
      { property: "og:title", content: "Documents — HECSense" },
      { property: "og:description", content: "All HECSense project documents in one place." },
    ],
  }),
  component: Documents,
});

const docs = [
  { title: "Project Charter", file: "documents/project-charter.pdf" },
  { title: "Proposal Document", file: "documents/proposal.pdf" },
  { title: "Status Document 1", file: "documents/status-1.pdf" },
  { title: "Status Document 2", file: "documents/status-2.pdf" },
  { title: "Final Report", file: "documents/final-report.pdf" },
];

function Documents() {
  return (
    <PageShell
      eyebrow="Documents"
      title="Project Documents"
      intro="Formal academic deliverables submitted throughout the research lifecycle."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <div key={d.title} className="card-hover gradient-card rounded-2xl border border-border p-7 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-display font-semibold">{d.title}</h3>
            <a
              href={d.file}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary text-primary px-5 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
            >
              {/* Replace with actual document */}
              <Download className="h-4 w-4" /> Download
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
