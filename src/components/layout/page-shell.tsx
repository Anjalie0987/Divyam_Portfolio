"use client";

import { CustomCursor } from "./custom-cursor";
import { ScrollProgress } from "./scroll-progress";
import { Navbar } from "./navbar";
import { Container } from "@/components/ui/container";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
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
      <footer className="w-full relative z-10 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] min-h-[60px] px-[24px] lg:px-[64px] py-[16px]">
        <Container className="max-w-none p-0 m-0 h-full flex flex-col xl:flex-row justify-between items-center gap-4 text-center xl:text-left">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.3)]">
            Supporting business outcomes through data, technology, and process optimization.
          </span>
          <div className="flex flex-wrap justify-center gap-[24px] text-[12px] tracking-[0.08em] text-[rgba(255,255,255,0.45)]" style={{ fontFamily: "'DM Mono', monospace" }}>
            <a href="https://www.linkedin.com/in/divyam-mishra-29b59a200" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Divyam-Mishra" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://x.com/Divyam236" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://scholar.google.com/citations?hl=en&user=ctOKe6EAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Scholar</a>
          </div>
        </Container>
      </footer>
    </>
  );
}
