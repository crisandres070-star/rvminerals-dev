const STATS = [
  "15+ años de experiencia",
  "120+ operaciones coordinadas",
  "250+ colaboraciones estratégicas",
  "0 accidentes graves en los últimos 5 años",
];

type StatsMarqueeProps = {
  variant?: "ink" | "copper";
};

export default function StatsMarquee({ variant = "ink" }: StatsMarqueeProps) {
  const isCopper = variant === "copper";

  return (
    <section
      aria-label="Cifras destacadas de R & V Minerals"
      className={`marquee-section relative overflow-hidden border-y ${
        isCopper ? "border-ink-900/20 bg-copper" : "border-copper/20 bg-ink-800"
      } py-5 sm:py-6`}
    >
      <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-2 motion-reduce:py-1">
        {[0, 1].map((rep) => (
          <ul
            key={rep}
            aria-hidden={rep === 1}
            className={`flex shrink-0 items-center ${rep === 1 ? "motion-reduce:hidden" : ""}`}
          >
            {STATS.map((stat, i) => (
              <li
                key={`${rep}-${i}`}
                className={`flex items-center whitespace-nowrap px-6 text-xs font-semibold uppercase tracking-[0.2em] sm:px-10 sm:text-sm ${
                  isCopper ? "text-ink-900" : "text-paper/90"
                }`}
              >
                {stat}
                <span
                  className={`ml-6 sm:ml-10 ${isCopper ? "text-ink-900/40" : "text-copper"}`}
                  aria-hidden="true"
                >
                  ·
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
