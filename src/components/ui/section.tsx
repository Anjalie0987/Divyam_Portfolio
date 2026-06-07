import { cn } from "@/lib/utils";
import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  containerClass?: string;
  noContainer?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClass,
  noContainer = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-24 lg:py-32 overflow-hidden", className)}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <div className={cn("mx-auto w-full max-w-screen-2xl px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20", containerClass)}>
          {children}
        </div>
      )}
    </section>
  );
}
