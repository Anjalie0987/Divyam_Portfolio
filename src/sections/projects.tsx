import { Container } from "@/components/ui/container";

export function Projects() {
  return (
    <section id="projects" className="relative flex w-full flex-col justify-start bg-[#050505] text-[#ffffff] pt-[90px] pb-[32px]">
      
      {/* Hero Section */}
      <Container>
        <div className="mb-[40px] flex items-center gap-3">
          <div className="h-[1px] w-6 bg-[#D4AF37]" />
          <span className="text-[12px] uppercase tracking-[3px] text-[#D4AF37] font-mono">
            PROJECTS
          </span>
        </div>
        
        <h1 className="text-[88px] font-[500] leading-[0.92] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Built to solve<br />
          <span className="italic text-[#D4AF37]">real problems</span>
        </h1>
        
        <p className="max-w-[650px] text-[18px] leading-[1.9] text-[rgba(255,255,255,0.65)] mt-[40px]">
          AI-driven systems tackling environmental monitoring and healthcare data — with live demos you can explore right now.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-[8px] mt-[40px]">
          <button className="h-[38px] px-[18px] bg-[#D4AF37] text-[#050505] border-none font-mono text-[12px] tracking-[2px]">ALL</button>
          <button className="h-[38px] px-[18px] bg-transparent border border-[rgba(255,255,255,0.08)] text-white font-mono text-[12px] tracking-[2px] transition-colors hover:bg-[rgba(255,255,255,0.04)]">AI</button>
          <button className="h-[38px] px-[18px] bg-transparent border border-[rgba(255,255,255,0.08)] text-white font-mono text-[12px] tracking-[2px] transition-colors hover:bg-[rgba(255,255,255,0.04)]">HEALTHCARE</button>
          <button className="h-[38px] px-[18px] bg-transparent border border-[rgba(255,255,255,0.08)] text-white font-mono text-[12px] tracking-[2px] transition-colors hover:bg-[rgba(255,255,255,0.04)]">ENVIRONMENT</button>
        </div>
      </Container>

      {/* Projects List Wrapper */}
      <div className="w-full mt-[80px]">
        
        {/* PROJECT 01 */}
        <div className="w-full border-t border-[rgba(255,255,255,0.06)]">
          <Container className="pt-[48px] pb-[60px]">
            {/* Top Pills */}
            <div className="flex flex-wrap gap-[8px]">
              <div className="h-[28px] px-[14px] rounded-full bg-[#1f1a08] border border-[#d4af37] text-[#d4af37] font-mono text-[11px] tracking-[2px] flex items-center justify-center">
                AI • ENVIRONMENT
              </div>
              <div className="h-[28px] px-[14px] rounded-full bg-[#111] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.75)] font-mono text-[11px] tracking-[2px] flex items-center justify-center">
                LIVE DEMO
              </div>
              <div className="h-[28px] px-[14px] rounded-full bg-[#111] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.75)] font-mono text-[11px] tracking-[2px] flex items-center justify-center">
                OPEN SOURCE
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[58px] font-[500] leading-[1.08] text-[#ffffff] tracking-[0] mt-[24px] mb-[20px] max-w-[1200px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Pravah — forest & wildlife AI monitoring
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[1.8] font-[400] text-[rgba(255,255,255,0.65)] max-w-[1100px]">
              AI-driven monitoring system for forest ecosystems and wildlife tracking, providing data-driven insights for policy planning and stakeholder process optimisation.
            </p>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-[40px] gap-[24px] md:gap-0 md:min-h-[104px]">
              {/* Problem */}
              <div className="flex flex-col pr-[24px]">
                <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.35)] mb-[12px]">PROBLEM</span>
                <p className="text-[16px] leading-[1.7] font-[400] text-[rgba(255,255,255,0.8)] max-w-[90%]">
                  No real-time visibility into forest health or wildlife movement for policymakers and conservation stakeholders
                </p>
              </div>
              {/* Solution */}
              <div className="flex flex-col px-[24px] md:border-l border-[rgba(255,255,255,0.06)]">
                <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.35)] mb-[12px]">SOLUTION</span>
                <p className="text-[16px] leading-[1.7] font-[400] text-[rgba(255,255,255,0.8)] max-w-[90%]">
                  AI monitoring system with gap analysis engine and data dashboards built for decision-makers
                </p>
              </div>
              {/* Impact */}
              <div className="flex flex-col pl-[24px] md:border-l border-[rgba(255,255,255,0.06)]">
                <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.35)] mb-[12px]">IMPACT</span>
                <p className="text-[16px] leading-[1.7] font-[400] text-[rgba(255,255,255,0.8)] max-w-[90%]">
                  Structured insights enabling evidence-based policy planning and quantified stakeholder reporting
                </p>
              </div>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap items-center gap-[8px] mt-[28px]">
              {["Python", "AI/ML", "Data analytics", "Process optimisation"].map((tag, idx) => (
                <div key={idx} className="h-[34px] px-[14px] border border-[rgba(255,255,255,0.08)] bg-transparent text-[#ffffff] font-mono text-[12px] tracking-[1px] inline-flex items-center justify-center">
                  {tag}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] mt-[24px]">
              <a href="https://pravah-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[26px] bg-[#d4af37] text-[#050505] font-[600] font-mono text-[12px] tracking-[2px] transition-colors hover:bg-white">
                LIVE DEMO
              </a>
              <a href="https://github.com/Divyam-Mishra/Pravah" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[26px] bg-transparent border border-[rgba(255,255,255,0.08)] text-white font-mono text-[12px] tracking-[2px] transition-colors hover:bg-[rgba(255,255,255,0.04)]">
                SOURCE CODE
              </a>
            </div>
          </Container>
        </div>

        {/* PROJECT 02 */}
        <div className="w-full border-y border-[rgba(255,255,255,0.06)]">
          <Container className="pt-[48px] pb-[60px]">
            {/* Top Pills */}
            <div className="flex flex-wrap gap-[8px]">
              <div className="h-[28px] px-[14px] rounded-full bg-[#1f1a08] border border-[#d4af37] text-[#d4af37] font-mono text-[11px] tracking-[2px] flex items-center justify-center">
                AI • HEALTHCARE
              </div>
              <div className="h-[28px] px-[14px] rounded-full bg-[#111] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.75)] font-mono text-[11px] tracking-[2px] flex items-center justify-center">
                LIVE DEMO
              </div>
              <div className="h-[28px] px-[14px] rounded-full bg-[#111] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.75)] font-mono text-[11px] tracking-[2px] flex items-center justify-center">
                OPEN SOURCE
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[58px] font-[500] leading-[1.08] text-[#ffffff] tracking-[0] mt-[24px] mb-[20px] max-w-[1200px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Swasthlekh — secure health record management
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[1.8] font-[400] text-[rgba(255,255,255,0.65)] max-w-[1100px]">
              Privacy-compliant health record system with AI-driven assistance. Streamlines patient data workflows and reduces administrative friction for healthcare providers.
            </p>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-[40px] gap-[24px] md:gap-0 md:min-h-[104px]">
              {/* Problem */}
              <div className="flex flex-col pr-[24px]">
                <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.35)] mb-[12px]">PROBLEM</span>
                <p className="text-[16px] leading-[1.7] font-[400] text-[rgba(255,255,255,0.8)] max-w-[90%]">
                  Fragmented patient records, manual workflows, and weak data privacy practices across providers
                </p>
              </div>
              {/* Solution */}
              <div className="flex flex-col px-[24px] md:border-l border-[rgba(255,255,255,0.06)]">
                <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.35)] mb-[12px]">SOLUTION</span>
                <p className="text-[16px] leading-[1.7] font-[400] text-[rgba(255,255,255,0.8)] max-w-[90%]">
                  Centralised, secure system with AI assistance for intelligent record management and retrieval
                </p>
              </div>
              {/* Impact */}
              <div className="flex flex-col pl-[24px] md:border-l border-[rgba(255,255,255,0.06)]">
                <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.35)] mb-[12px]">IMPACT</span>
                <p className="text-[16px] leading-[1.7] font-[400] text-[rgba(255,255,255,0.8)] max-w-[90%]">
                  Streamlined patient data workflows with full privacy compliance and reduced administrative burden
                </p>
              </div>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap items-center gap-[8px] mt-[28px]">
              {["Python", "AI/ML", "Healthcare data", "Privacy compliance"].map((tag, idx) => (
                <div key={idx} className="h-[34px] px-[14px] border border-[rgba(255,255,255,0.08)] bg-transparent text-[#ffffff] font-mono text-[12px] tracking-[1px] inline-flex items-center justify-center">
                  {tag}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] mt-[24px]">
              <a href="https://swasthlekh.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[26px] bg-[#d4af37] text-[#050505] font-[600] font-mono text-[12px] tracking-[2px] transition-colors hover:bg-white">
                LIVE DEMO
              </a>
              <a href="https://github.com/Divyam-Mishra/Swasthlekh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[26px] bg-transparent border border-[rgba(255,255,255,0.08)] text-white font-mono text-[12px] tracking-[2px] transition-colors hover:bg-[rgba(255,255,255,0.04)]">
                SOURCE CODE
              </a>
            </div>
          </Container>
        </div>

      </div>
    </section>
  );
}
