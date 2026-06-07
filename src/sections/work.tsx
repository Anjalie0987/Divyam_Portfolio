import { Container } from "@/components/ui/container";

export function Work() {
  return (
    <section id="work" className="relative flex w-full flex-col justify-start bg-[#050505] pt-[90px] pb-[32px]">
      
      {/* Hero Section */}
      <Container>
        <div className="relative flex flex-col lg:flex-row justify-between">
          
          {/* Left Column (Main Headline & Description) */}
          <div className="flex flex-col w-full lg:w-[65%] lg:pr-12">
            <div className="mb-[40px] flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
                WORK & EXPERIENCE
              </span>
            </div>
            
            <h2 className="text-[56px] font-normal leading-[0.92] tracking-[-0.02em] text-[#F4F1EA]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Turning process chaos<br />
              <span className="italic text-[#D4AF37]">into clean systems</span>
            </h2>
            
            <p className="max-w-[620px] text-[14px] leading-[1.9] text-[rgba(255,255,255,0.60)] mt-[28px] mb-[40px]">
              ERP implementations, data migrations, McKinsey-grade problem-solving, and the leadership that runs alongside it all. Every engagement is a case study.
            </p>
          </div>

          {/* Right Column (KPI Stack) */}
          <div className="flex flex-col w-full lg:w-[280px]">
            {/* Stat 1 */}
            <div className="flex flex-col py-[24px] border-b border-[rgba(255,255,255,0.08)]">
              <span className="text-[42px] font-normal text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>10K+</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.55)] mt-2">Records migrated</span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col py-[24px] border-b border-[rgba(255,255,255,0.08)]">
              <span className="text-[42px] font-normal text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.55)] mt-2">ERP modules</span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col py-[24px]">
              <span className="text-[42px] font-normal text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>100%</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.55)] mt-2">Go-live success</span>
            </div>
          </div>

        </div>
      </Container>

      {/* Section Divider Bar */}
      <div className="w-full border-y border-[rgba(255,255,255,0.08)] h-[44px] flex items-center mb-[80px]">
        <Container>
          <div className="flex items-center justify-between w-full">
            <span className="text-[10px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.55)]">PROFESSIONAL CONSULTING</span>
            <span className="text-[10px] text-[rgba(255,255,255,0.55)]">01</span>
          </div>
        </Container>
      </div>

      {/* Experience Card */}
      <Container>
        <div className="w-full h-auto md:h-[140px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)] py-[32px] px-[44px] flex flex-col justify-center relative transition-colors hover:bg-[rgba(255,255,255,0.04)]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase tracking-[2px] font-medium text-[#D4AF37]">TARGET INTEGRATION · GURUGRAM</span>
            {/* STATUS PILL */}
            <div className="border border-[#D4AF37] text-[#D4AF37] rounded-full px-[18px] h-[36px] flex items-center justify-center text-[10px] tracking-[0.14em]">
              ACTIVE
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-[28px] font-medium text-[#F4F1EA] leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Odoo Consultant
            </h3>
            <span className="text-[13px] text-[rgba(255,255,255,0.6)] mt-1">
              Aug 2025 – Present · Full-time
            </span>
          </div>
        </div>
      </Container>

      {/* Delivery Framework */}
      <Container className="mt-[56px]">
        <div className="text-[10px] uppercase tracking-[4px] text-[rgba(255,255,255,0.45)] mt-0 mb-[28px]">
          THREE-PHASE DELIVERY FRAMEWORK
        </div>
        
        {/* Horizontal Divider */}
        <div className="w-full flex items-center mb-[28px]">
          <div className="w-[33.33%] h-[2px] bg-[#D4AF37]"></div>
          <div className="w-[66.67%] h-[1px] bg-[rgba(255,255,255,0.08)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-[56px]">
          {/* Phase 01 */}
          <div className="flex flex-col border-r border-[rgba(255,255,255,0.08)] pr-[42px]">
            <span className="text-[10px] tracking-[2px] uppercase text-[rgba(255,255,255,0.55)] mb-[18px]">PHASE 01</span>
            <h4 className="text-[15px] font-[600] text-[#F4F1EA] mb-[18px]">Discover & document</h4>
            <p className="text-[12px] leading-[1.8] text-[rgba(255,255,255,0.65)] max-w-[95%]">
              Structured requirement gathering with business stakeholders. Conducted As-Is / To-Be process mapping across Sales, Inventory, and Accounting. Documented gaps and translated operational requirements into system specifications.
            </p>
          </div>
          {/* Phase 02 */}
          <div className="flex flex-col border-r border-[rgba(255,255,255,0.08)] px-[42px]">
            <span className="text-[10px] tracking-[2px] uppercase text-[rgba(255,255,255,0.55)] mb-[18px]">PHASE 02</span>
            <h4 className="text-[15px] font-[600] text-[#F4F1EA] mb-[18px]">Configure & build</h4>
            <p className="text-[12px] leading-[1.8] text-[rgba(255,255,255,0.65)] max-w-[95%]">
              Configured Odoo workflows against documented requirements. Cross-functional collaboration to validate configurations. Iterative refinement based on stakeholder feedback loops throughout.
            </p>
          </div>
          {/* Phase 03 */}
          <div className="flex flex-col pl-[42px]">
            <span className="text-[10px] tracking-[2px] uppercase text-[rgba(255,255,255,0.55)] mb-[18px]">PHASE 03</span>
            <h4 className="text-[15px] font-[600] text-[#F4F1EA] mb-[18px]">Test & go-live</h4>
            <p className="text-[12px] leading-[1.8] text-[rgba(255,255,255,0.65)] max-w-[95%]">
              Facilitated multiple UAT cycles identifying functional gaps and resolving configuration issues prior to go-live. Managed 10,000+ records through cleansing and migration pipeline.
            </p>
          </div>
        </div>
      </Container>

      {/* Project Impact Section */}
      <Container>
        <div className="text-[10px] uppercase tracking-[4px] text-[rgba(255,255,255,0.45)] mb-[20px]">
          MEASURABLE IMPACT
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 h-[96px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
          {/* Block 1 */}
          <div className="flex flex-col justify-center h-full px-[24px] border-r border-[rgba(255,255,255,0.05)]">
            <span className="text-[28px] font-[400] text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>10K+</span>
            <span className="text-[12px] text-[rgba(255,255,255,0.60)] leading-[1.4] mt-[4px]">Records cleansed & migrated without critical errors</span>
          </div>
          {/* Block 2 */}
          <div className="flex flex-col justify-center h-full px-[24px] border-r border-[rgba(255,255,255,0.05)]">
            <span className="text-[28px] font-[400] text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3</span>
            <span className="text-[12px] text-[rgba(255,255,255,0.60)] leading-[1.4] mt-[4px]">Core ERP modules fully configured & deployed</span>
          </div>
          {/* Block 3 */}
          <div className="flex flex-col justify-center h-full px-[24px] border-r border-[rgba(255,255,255,0.05)]">
            <span className="text-[28px] font-[400] text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>UAT</span>
            <span className="text-[12px] text-[rgba(255,255,255,0.60)] leading-[1.4] mt-[4px]">Multiple cycles — all gaps resolved pre go-live</span>
          </div>
          {/* Block 4 */}
          <div className="flex flex-col justify-center h-full px-[24px]">
            <span className="text-[28px] font-[400] text-[#D4AF37] leading-[1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>↑</span>
            <span className="text-[12px] text-[rgba(255,255,255,0.60)] leading-[1.4] mt-[4px]">Data accuracy enabling reliable financial reporting</span>
          </div>
        </div>
      </Container>

      {/* Tools & Modules */}
      <Container className="mt-[28px]">
        <div className="text-[10px] uppercase tracking-[4px] text-[rgba(255,255,255,0.45)] mb-[16px]">
          TOOLS & MODULES
        </div>
        <div className="flex flex-wrap items-center gap-[8px]">
          {["Sales module", "Inventory module", "Accounting module", "Data migration", "SOP documentation", "Excel", "SQL", "Python · Pandas", "Gap analysis"].map((tool, idx) => (
            <div key={idx} className="h-[30px] px-[14px] border border-[rgba(255,255,255,0.08)] bg-transparent text-[#F5F5F5] text-[11px] inline-flex items-center justify-center">
              {tool}
            </div>
          ))}
        </div>
      </Container>

      {/* McKinsey Section */}
      <Container>
        <div 
          className="mt-16 w-full border border-[rgba(212,175,55,0.20)] px-[44px] py-[32px] rounded-none"
          style={{ background: "linear-gradient(90deg, rgba(212,175,55,.02), rgba(212,175,55,.05))" }}
        >
          {/* Header Row */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[3px] uppercase text-[#d4af37] font-mono mb-[16px]">
                MCKINSEY & COMPANY · GLOBAL
              </span>
              <h3 className="text-[28px] font-[400] text-[#ffffff] leading-[1.1] mb-[8px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                McKinsey Forward Program
              </h3>
              <span className="text-[13px] text-[rgba(255,255,255,0.55)] font-[400]">
                2026 · 10-week program · Professional development
              </span>
            </div>

          </div>

          {/* Divider */}
          <div className="mt-[28px] mb-[32px] border-t border-[rgba(212,175,55,0.15)] w-full"></div>

          {/* Description Block */}
          <div className="flex items-start">
            <div className="w-[2px] h-[68px] bg-[#d4af37] mr-[24px] flex-shrink-0"></div>
            <p className="text-[14px] leading-[2] font-[400] text-[rgba(255,255,255,0.65)] max-w-[90%]">
              Developed structured problem-solving, executive communication, adaptability, and digital/AI skills through McKinsey’s exclusive 10-week global learning program. Participated in case-based learning, leadership webinars, and consulting-oriented business problem solving — the same frameworks McKinsey deploys with Fortune 500 clients.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-[32px] grid grid-cols-1 md:grid-cols-4 gap-[12px]">
            {/* Card 1 */}
            <div className="bg-[rgba(212,175,55,0.03)] border border-[rgba(212,175,55,0.15)] p-[18px] min-h-[92px]">
              <h5 className="text-[14px] font-[600] text-[#fff] mb-[8px]">Structured problem-solving</h5>
              <p className="text-[12px] leading-[1.6] text-[rgba(255,255,255,0.55)]">MECE frameworks, hypothesis-driven analysis, issue trees</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[rgba(212,175,55,0.03)] border border-[rgba(212,175,55,0.15)] p-[18px] min-h-[92px]">
              <h5 className="text-[14px] font-[600] text-[#fff] mb-[8px]">Executive communication</h5>
              <p className="text-[12px] leading-[1.6] text-[rgba(255,255,255,0.55)]">Pyramid principle, stakeholder storytelling, slide logic</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[rgba(212,175,55,0.03)] border border-[rgba(212,175,55,0.15)] p-[18px] min-h-[92px]">
              <h5 className="text-[14px] font-[600] text-[#fff] mb-[8px]">Digital & AI skills</h5>
              <p className="text-[12px] leading-[1.6] text-[rgba(255,255,255,0.55)]">AI applications in consulting, digital transformation frameworks</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[rgba(212,175,55,0.03)] border border-[rgba(212,175,55,0.15)] p-[18px] min-h-[92px]">
              <h5 className="text-[14px] font-[600] text-[#fff] mb-[8px]">Adaptability & leadership</h5>
              <p className="text-[12px] leading-[1.6] text-[rgba(255,255,255,0.55)]">Change management, resilience, cross-cultural collaboration</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Leadership & Community Divider */}
      <div className="w-full border-y border-[rgba(255,255,255,0.06)] h-[60px] flex items-center mt-[120px]">
        <Container>
          <div className="flex items-center justify-between w-full">
            <span className="text-[10px] uppercase tracking-[3px] text-[#D4AF37] font-mono">LEADERSHIP & COMMUNITY</span>
            <span className="text-[10px] tracking-[2px] text-[rgba(255,255,255,0.45)] font-mono">02</span>
          </div>
        </Container>
      </div>

      {/* Leadership & Community Section */}
      <Container>
        <div className="mt-[48px] w-full bg-[#050505] border border-[rgba(255,255,255,0.04)] rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Column 1 */}
            <div className="flex flex-col justify-start p-[40px] md:border-r border-[rgba(255,255,255,0.06)]">
              <span className="text-[24px] mb-[24px] block">👥</span>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D4AF37] font-mono">DCE ACM STUDENT CHAPTER</span>
              <h3 className="text-[22px] font-[500] text-[#fff] mt-[14px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Vice-Chair</h3>
              <span className="text-[12px] text-[rgba(255,255,255,0.50)] mt-[4px] mb-[24px]">Jul 2023 – Jul 2024</span>
              
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Directed a 25-member executive team across the full academic year</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Organized hackathons, technical workshops & innovation programs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Delivered training in Python, Data Science, Generative AI & ML</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">End-to-end stakeholder coordination for large-scale events</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col justify-start p-[40px] md:border-r border-[rgba(255,255,255,0.06)]">
              <span className="text-[24px] mb-[24px] block">💡</span>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D4AF37] font-mono">AIII CLUB AT DCE</span>
              <h3 className="text-[22px] font-[500] text-[#fff] mt-[14px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Founding Member</h3>
              <span className="text-[12px] text-[rgba(255,255,255,0.50)] mt-[4px] mb-[24px]">Mar 2023 – Jun 2024</span>
              
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Built the AI innovation club from the ground up at DCE</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Led workshops, events & skill-building initiatives</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Promoted student innovation & interdisciplinary engagement</span>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col justify-start p-[40px]">
              <span className="text-[24px] mb-[24px] block">🖤</span>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D4AF37] font-mono">NATIONAL SERVICE SCHEME (NSS)</span>
              <h3 className="text-[22px] font-[500] text-[#fff] mt-[14px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Volunteer</h3>
              <span className="text-[12px] text-[rgba(255,255,255,0.50)] mt-[4px] mb-[24px]">Oct 2022 – Jun 2025 · 3 years</span>
              
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Plantation drives & cleanliness campaigns</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Blood donation camp organisation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-[8px] mt-[2px]">—</span>
                  <span className="text-[13px] leading-[1.9] text-[rgba(255,255,255,0.65)]">Educational support for underprivileged children</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>

    </section>
  );
}
