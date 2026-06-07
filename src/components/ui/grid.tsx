import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
}

export function Grid({
  columns = 3,
  gap = "md",
  className,
  children,
  ...props
}: GridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12",
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
    xl: "gap-12 md:gap-16 lg:gap-24",
  };

  return (
    <div
      className={cn("grid w-full", columnClasses[columns], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}
