import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function Stat({ value, label, description, className }: StatProps) {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
        {value}
      </div>
      <div className="text-lg font-medium text-foreground">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
