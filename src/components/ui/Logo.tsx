import { Mountain } from "lucide-react";

export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="R & V Minerals SpA, ir a inicio">
      <Mountain className="h-8 w-8 shrink-0 text-copper" strokeWidth={1.5} aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-paper">
          R&amp;V
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
          Minerals SpA
        </span>
      </span>
    </a>
  );
}
