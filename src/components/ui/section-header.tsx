import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col space-y-4 mb-16 max-w-3xl", alignmentClass, className)}>
      {subtitle && (
        <span className="text-primary font-mono text-sm tracking-wider uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-balance mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
