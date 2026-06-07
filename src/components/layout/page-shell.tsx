"use client";

import { ScrollProgress } from "./scroll-progress";
import { Navbar } from "./navbar";
import { Container } from "@/components/ui/container";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      {/* 
        The main content is wrapped here.
        Future sections (Home, About, etc.) will be inserted as children. 
      */}
      <main className="relative z-10 flex w-full flex-col overflow-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full relative z-10 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] h-[60px] px-[24px] lg:px-[64px]">
        <Container className="max-w-none p-0 m-0 h-full flex justify-between items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.3)] hidden md:block">
            Supporting business outcomes through data, technology, and process optimization.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.3)] block md:hidden">
            Business & Process Optimization
          </span>
          <div className="flex gap-[24px] text-[12px] tracking-[0.08em] text-[rgba(255,255,255,0.45)]" style={{ fontFamily: "'DM Mono', monospace" }}>
            <a href="https://www.linkedin.com/in/divyam-mishra-29b59a200" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Divyam-Mishra" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://x.com/Divyam236" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </Container>
      </footer>
    </>
  );
}
