export default function PageFooter() {
  return (
    <div className="mt-16 border-t border-accent/30 pt-8 font-mono text-xs text-muted-foreground">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>{"// Data Engineering Open Forum"}</div>
        <div className="flex gap-6">
          <span>{"[OPEN]"}</span>
          <span>{"[TECHNICAL]"}</span>
          <span>{"[COMMUNITY]"}</span>
        </div>
      </div>
    </div>
  );
}
