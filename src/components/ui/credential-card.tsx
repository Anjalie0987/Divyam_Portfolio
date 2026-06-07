"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface CredentialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  metadata: string;
  title: string;
  description: string;
}

export const CredentialCard = React.forwardRef<HTMLDivElement, CredentialCardProps>(
  ({ metadata, title, description, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-hoverable="true"
        className={cn(
          "group relative flex flex-col rounded-md border border-white/5 border-l-[2px] border-l-primary bg-[#171717]/80 p-4 lg:p-[18px] transition-all duration-300 hover:border-white/10 hover:bg-[#171717]",
          className
        )}
        {...props}
      >
        <span className="mb-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-primary">
          {metadata}
        </span>
        <h3 className="mb-1.5 font-sans text-[14px] font-medium tracking-tight text-white">
          {title}
        </h3>
        {/* We use whitespace-pre-line to respect newline characters in the description string */}
        <p className="whitespace-pre-line font-sans text-[11px] leading-[1.5] text-white/50">
          {description}
        </p>
      </div>
    );
  }
);
CredentialCard.displayName = "CredentialCard";
