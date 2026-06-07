import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const HIGHLIGHTS_DATA = [
  {
    label: "01 · ERP consulting",
    metric: "10K+",
    title: "Records migrated — zero critical errors",
    description: "Master and transactional records cleansed, validated, and migrated across Sales, Inventory & Accounting in Odoo. Data integrity maintained throughout.",
  },
  {
    label: "02 · Research",
    metric: "2",
    title: "Full papers — ScienceDirect indexed",
    description: "Published on AI & Nanomedicine in healthcare. One paper presented in person at ICSET 2023 in Malacca, Malaysia. Indexed on ScienceDirect.",
  },
  {
    label: "03 · McKinsey",
    metric: "MFP",
    title: "McKinsey Forward Program — '26 cohort",
    description: "10-week global consulting program by McKinsey & Company. Structured problem-solving, pyramid principle, AI & digital transformation frameworks.",
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="w-full bg-[#050505] pt-[80px] pb-[60px] px-[64px]">
      <Container className="max-w-none p-0 m-0">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-[48px]">
          <h2 className="text-[52px] font-light tracking-[-0.02em] text-[#F4F1EA]" style={{ fontFamily: "'Canela', serif", lineHeight: 0.95 }}>
            Key highlights
          </h2>
          <p className="font-sans text-[15px] leading-[1.8] text-[rgba(255,255,255,0.5)] max-w-[260px] text-right mt-2">
            The numbers and milestones that define the work so far
          </p>
        </div>

        {/* Top 3 Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {HIGHLIGHTS_DATA.map((item, i) => (
            <div 
              key={i}
              className={cn(
                "group flex flex-col pt-[28px] pb-[24px] pr-[32px] border-t border-[rgba(255,255,255,0.08)] transition-all duration-200 hover:border-t-[#E8C84A]",
                i !== 2 && "border-r"
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(255,255,255,0.45)]">
                  {item.label}
                </span>
              </div>
              
              <div className="text-[42px] font-light text-[#E5C74A] mb-3 leading-none" style={{ fontFamily: "Canela, serif" }}>
                {item.metric}
              </div>
              
              <h3 className="font-sans text-[14px] font-semibold text-white leading-[1.4] mt-4 mb-2">
                {item.title}
              </h3>
              
              <p className="font-sans text-[12px] leading-[1.8] text-[rgba(255,255,255,0.58)] max-w-[360px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-[28px] mt-[32px]">
          
          {/* Left Card */}
          <div className="flex items-start gap-[24px] bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.05)] h-[120px] px-[24px] py-[18px]">
            <div className="text-[38px] font-light text-[#E8C84A] leading-none shrink-0" style={{ fontFamily: "Canela, serif" }}>
              ₹50K
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-sans text-[14px] font-medium text-white mb-1 leading-[1.4]">
                IIT Madras i2i Challenge — Finalist & prize winner
              </h4>
              <p className="font-sans text-[12px] leading-[1.8] text-[rgba(255,255,255,0.55)]">
                Awarded ₹50,000 for prototype development and demonstrating business impact potential at India's premier tech institute competition.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex items-start gap-[24px] bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.05)] h-[120px] px-[24px] py-[18px]">
            <div className="text-[38px] font-light text-[#E8C84A] leading-none shrink-0" style={{ fontFamily: "Canela, serif" }}>
              25
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-sans text-[14px] font-medium text-white mb-1 leading-[1.4]">
                Members led — ACM Student Chapter Vice-Chair
              </h4>
              <p className="font-sans text-[12px] leading-[1.8] text-[rgba(255,255,255,0.55)]">
                Directed a 25-member executive team. Organized hackathons, workshops, and delivered training in Python, Gen AI & ML.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
