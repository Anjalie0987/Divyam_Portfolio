import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-heading text-3xl font-medium tracking-tight text-primary md:text-4xl">
        {value}
      </span>
      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
