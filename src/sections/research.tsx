"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Research() {
  return (
    <section id="research" className="relative flex w-full flex-col justify-start bg-[#050505] text-[#ffffff] pt-[120px] pb-[110px] min-h-screen">
      
      {/* Hero Section */}
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row justify-between mb-[80px]"
        >
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-[65%] lg:pr-12">
            <div className="mb-[40px] flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
              <span className="text-[13px] uppercase tracking-[4px] text-[#D4AF37] font-mono">
                RESEARCH & PUBLICATIONS
              </span>
            </div>
            
            <h1 className="text-[96px] font-[500] leading-[0.95] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Published.<br />
              Indexed.<br />
              <span className="italic text-[#D4AF37]">Presented internationally.</span>
            </h1>
            
            <p className="max-w-[580px] text-[18px] leading-[1.9] text-[rgba(255,255,255,0.65)] mt-[40px]">
              Two full papers on AI at the intersection of healthcare and nanotechnology — indexed on ScienceDirect and presented at ICSET 2023 in Malacca, Malaysia.
            </p>
          </div>

          {/* Right Column (Stats) */}
          <div className="flex flex-col w-full mt-[64px] lg:mt-0 lg:w-[30%] lg:items-end justify-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-end border-t border-[rgba(255,255,255,0.06)] py-[20px] w-full text-right">
              <span className="text-[40px] text-[#d4af37] leading-none mb-[8px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2</span>
              <span className="text-[12px] uppercase tracking-[2px] text-[rgba(255,255,255,0.45)] font-mono">Full papers published</span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-end border-t border-[rgba(255,255,255,0.06)] py-[20px] w-full text-right">
              <span className="text-[40px] text-[#d4af37] leading-none mb-[8px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>ScienceDirect</span>
              <span className="text-[12px] uppercase tracking-[2px] text-[rgba(255,255,255,0.45)] font-mono">Indexed journal</span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-end border-y border-[rgba(255,255,255,0.06)] py-[20px] w-full text-right">
              <span className="text-[40px] text-[#d4af37] leading-none mb-[8px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Malaysia '23</span>
              <span className="text-[12px] uppercase tracking-[2px] text-[rgba(255,255,255,0.45)] font-mono">International conference</span>
            </div>
          </div>
        </motion.div>
      </Container>

      <Container>
        {/* Publication Card 01 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="w-full bg-[#090909] border border-[rgba(212,175,55,0.15)] p-[48px] mb-[48px] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[rgba(212,175,55,0.35)] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          {/* Top Tags */}
          <div className="flex flex-wrap gap-[8px] mb-[24px]">
            <div className="h-[28px] px-[14px] rounded-full bg-transparent border border-[#d4af37] text-[#d4af37] font-mono text-[11px] tracking-[1px] flex items-center justify-center">
              SCIENCEDIRECT INDEXED
            </div>
            <div className="h-[28px] px-[14px] rounded-full bg-transparent border border-[#60A5FA] text-[#60A5FA] font-mono text-[11px] tracking-[1px] flex items-center justify-center">
              JOURNAL PAPER
            </div>
            <div className="h-[28px] px-[14px] rounded-full bg-transparent border border-[#d4af37] text-[#d4af37] font-mono text-[11px] tracking-[1px] flex items-center justify-center">
              FULL PAPER
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[52px] font-[500] leading-[1.1] text-white mb-[12px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Impact of Bridging the Gap Between Artificial Intelligence and Nanomedicine in Healthcare
          </h2>

          {/* Metadata */}
          <div className="text-[14px] text-[rgba(255,255,255,0.5)] mb-[24px]">
            Next Nanotechnology · ScienceDirect
          </div>

          {/* Abstract */}
          <p className="text-[17px] leading-[1.9] text-[rgba(255,255,255,0.72)] max-w-[1100px] mb-[32px]">
            Explores how AI-driven diagnostic systems can enhance accuracy in nanomedicine contexts, and examines advances in targeted drug delivery systems enabled by machine learning. Argues for tighter integration between AI decision-making pipelines and nanomedical intervention frameworks to improve patient outcomes at scale.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-[16px]">
            <a href="https://www.sciencedirect.com/science/article/pii/S2949829525000725" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[26px] bg-[#d4af37] text-[#050505] font-[600] font-mono text-[12px] tracking-[2px] transition-colors hover:bg-white">
              FULL PAPER
            </a>
          </div>
        </motion.div>

        {/* Publication Card 02 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full bg-[#090909] border border-[rgba(212,175,55,0.15)] p-[48px] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[rgba(212,175,55,0.35)] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          {/* Top Tags */}
          <div className="flex flex-wrap gap-[8px] mb-[24px]">
            <div className="h-[28px] px-[14px] rounded-full bg-transparent border border-[#4ADE80] text-[#4ADE80] font-mono text-[11px] tracking-[1px] flex items-center justify-center">
              CONFERENCE PAPER
            </div>
            <div className="h-[28px] px-[14px] rounded-full bg-transparent border border-[#60A5FA] text-[#60A5FA] font-mono text-[11px] tracking-[1px] flex items-center justify-center">
              IJACEN
            </div>
            <div className="h-[28px] px-[14px] rounded-full bg-transparent border border-[#d4af37] text-[#d4af37] font-mono text-[11px] tracking-[1px] flex items-center justify-center">
              FULL PAPER
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[52px] font-[500] leading-[1.1] text-white mb-[12px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Artificial Intelligence and Nanobots
          </h2>

          {/* Metadata */}
          <div className="text-[14px] text-[rgba(255,255,255,0.5)] mb-[24px]">
            IJACEN · ICSET 2023, Malacca, Malaysia
          </div>

          {/* Abstract */}
          <p className="text-[17px] leading-[1.9] text-[rgba(255,255,255,0.72)] max-w-[1100px] mb-[32px]">
            Investigates how AI enhances the precision and autonomy of surgical nanobots — covering navigation algorithms, real-time decision-making in vivo, and the role of machine learning in adaptive nanobot behaviour. Findings presented in-person at the International Conference on Science, Engineering & Technology in Malaysia.
          </p>

          {/* Conference Highlight Box */}
          <div className="border border-[#d4af37] bg-[rgba(212,175,55,0.05)] p-[24px] flex items-center gap-[20px] mb-[32px] max-w-[1100px]">
            <span className="text-[32px] opacity-90">🌍</span>
            <div className="flex flex-col">
              <span className="text-[#fff] font-[500] text-[16px] mb-[4px]">
                Presented at ICSET 2023 — Malacca, Malaysia
              </span>
              <span className="text-[rgba(255,255,255,0.55)] text-[13px]">
                International Conference on Science, Engineering & Technology · 2023 · In-person
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[16px]">
            <a href="https://iraj.in/journal/IJACEN/paper_detail.php?paper_id=19984&name=Artificial_Intelligence_and_Nanobots" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[26px] bg-[#d4af37] text-[#050505] font-[600] font-mono text-[12px] tracking-[2px] transition-colors hover:bg-white">
              FULL PAPER
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
