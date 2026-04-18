export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-primary-foreground">HECSense</h3>
          <p className="mt-2 text-sm opacity-80">
            Smart Monitoring and Repelling System for Elephant Intrusions.
          </p>
        </div>
        <div>
          <h4 className="font-display text-primary-foreground">Team</h4>
          <p className="mt-2 text-sm opacity-80">
            Research Group 2025 — Faculty of Computing, SLIIT
          </p>
        </div>
        <div>
          <h4 className="font-display text-primary-foreground">Location</h4>
          <p className="mt-2 text-sm opacity-80">SLIIT Malabe, Sri Lanka</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} HECSense Research Project · All rights reserved.
      </div>
    </footer>
  );
}
