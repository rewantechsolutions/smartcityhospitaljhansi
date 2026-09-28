import { Reveal } from "@/components/site/motion-primitives";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">{title}</h2>
      {desc ? <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{desc}</p> : null}
    </Reveal>
  );
}
