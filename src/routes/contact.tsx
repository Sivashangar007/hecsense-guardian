import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Mail, MapPin, Send, Globe, Share2, AtSign, Link as LinkIcon } from "lucide-react";
const social = [Globe, Share2, AtSign, LinkIcon];
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HECSense" },
      { name: "description", content: "Reach out to the HECSense team and supervisors at SLIIT Malabe, Sri Lanka." },
      { property: "og:title", content: "Contact — HECSense" },
      { property: "og:description", content: "Get in touch with the HECSense research team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="Contact Us"
      title="Get in Touch"
      intro="Questions, collaboration ideas or feedback — we'd love to hear from you."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-soft space-y-5"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input required type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea required rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none" />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 font-medium hover:opacity-90 transition shadow-soft"
          >
            <Send className="h-4 w-4" /> {sent ? "Sent — thank you!" : "Send Message"}
          </button>
        </form>

        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3 text-primary">
              <MapPin className="h-5 w-5" />
              <h3 className="font-display font-semibold">Location</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              SLIIT Malabe Campus,<br />New Kandy Road, Malabe, Sri Lanka
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3 text-primary">
              <Mail className="h-5 w-5" />
              <h3 className="font-display font-semibold">Team Emails</h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {["sivashangar@example.com","perera@example.com","keerthana@example.com","harshika@example.com"].map((e) => (
                <li key={e}><a href={`mailto:${e}`} className="text-secondary hover:underline">{e}</a></li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3 text-primary">
              <Mail className="h-5 w-5" />
              <h3 className="font-display font-semibold">Supervisor Emails</h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><a href="mailto:samantha@sliit.lk" className="text-secondary hover:underline">samantha@sliit.lk</a></li>
              <li><a href="mailto:harshanath@sliit.lk" className="text-secondary hover:underline">harshanath@sliit.lk</a></li>
            </ul>
          </div>

          <div className="flex gap-3">
            {social.map((Icon, i) => (
              <a key={i} href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition shadow-soft">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
