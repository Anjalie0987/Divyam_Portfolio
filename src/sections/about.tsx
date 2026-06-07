import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="relative flex w-full flex-col justify-start bg-[#050505] pt-[80px] pb-[80px]">
      <Container>
        
        {/* Top Area */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col lg:col-span-8 lg:pr-12 xl:pr-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[24px] h-[1px] bg-[#E5C74A]"></div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E5C74A]">
                ABOUT ME
              </span>
            </div>
            
            <h2 className="mb-10 flex flex-col tracking-[-0.03em]">
              <span className="text-white text-[72px] font-light leading-[0.95]" style={{ fontFamily: "Canela, serif" }}>
                I stay until
              </span>
              <span className="text-[#E5C74A] italic text-[72px] font-light leading-[0.95]" style={{ fontFamily: "Canela, serif" }}>
                it's fixed.
              </span>
            </h2>
            
            <div className="flex flex-col gap-6">
              <p className="text-[15px] leading-[2] text-[rgba(255,255,255,0.58)] max-w-[700px]">
                Final-year CSE (AI & ML) student at DCE Gurugram. Odoo Consultant at Target Integration. McKinsey Forward ’26 alumnus. Published researcher. IIT Madras i2i finalist. Presented research internationally at ICSET 2023, Malacca, Malaysia.
              </p>
              <p className="text-[15px] leading-[2] text-[rgba(255,255,255,0.58)] max-w-[700px]">
                I bridge the gap between messy business operations and clean technical systems through structured thinking, rigorous documentation, and hands-on ERP delivery. I don't just advise. I stay until it works.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col border-t lg:border-t-0 border-[rgba(255,255,255,0.06)] lg:col-span-4">
            {[
              {
                num: "01",
                title: "Listen before configuring",
                desc: "Every implementation starts with deep requirement gathering. Understanding the business before touching the system."
              },
              {
                num: "02",
                title: "Map the gaps, not just the flows",
                desc: "As-Is / To-Be mapping reveals what’s broken, not just what exists. That’s where real value is found."
              },
              {
                num: "03",
                title: "Validate relentlessly",
                desc: "UAT isn't a checkbox — it's where system logic meets business reality. I treat it that way."
              },
              {
                num: "04",
                title: "Structure everything",
                desc: "McKinsey Forward sharpened what I already practised — every problem has a structure. Find it, frame it, fix it."
              }
            ].map((principle, idx) => (
              <div key={idx} className="flex gap-8 py-[28px] border-b border-[rgba(255,255,255,0.06)]">
                <div className="text-[14px] text-[#E5C74A] font-semibold pt-1">
                  {principle.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] text-white font-semibold">
                    {principle.title}
                  </h3>
                  <p className="text-[15px] text-[rgba(255,255,255,0.58)] leading-[1.8]">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[rgba(255,255,255,0.06)] mt-[80px] mb-[60px]"></div>

        {/* Bottom Area */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Education Column */}
          <div className="flex flex-col lg:col-span-8 lg:pr-12 xl:pr-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E5C74A] mb-8">
              EDUCATION
            </div>
            <div className="flex flex-col border-t border-[rgba(255,255,255,0.06)] pt-2">
              {[
                {
                  title: "B.Tech CSE (AI & ML) · CGPA 7.9",
                  meta: "Dronacharya College of Engineering, Gurugram · 2022–2026"
                },
                {
                  title: "Class XII · 85.80% · CBSE",
                  meta: "Red Roses Public School, Saket · 2022"
                },
                {
                  title: "Class X · 89.40% · CBSE",
                  meta: "Red Roses Public School, Saket · 2020"
                }
              ].map((edu, idx) => (
                <div key={idx} className="flex items-start gap-4 py-6 border-b border-[rgba(255,255,255,0.06)] relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E5C74A] mt-2 shrink-0"></div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[18px] text-white font-medium">
                      {edu.title}
                    </h4>
                    <span className="text-[14px] text-[rgba(255,255,255,0.5)]">
                      {edu.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements Column */}
          <div className="flex flex-col lg:col-span-4">
            <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-[#D4AF37] mb-8">
              KEY ACHIEVEMENTS
            </div>
            
            <div className="grid grid-cols-2 gap-[12px]">
              {[
                {
                  icon: "🏆",
                  title: "McKinsey Forward Program '26",
                  desc: "10-week global consulting & AI program"
                },
                {
                  icon: "🎯",
                  title: "IIT Madras i2i Finalist",
                  desc: "₹50,000 prize for prototype development"
                },
                {
                  icon: "🌏",
                  title: "ICSET 2023 · Malaysia",
                  desc: "International research presentation"
                },
                {
                  icon: "🥇",
                  title: "Innovation to Impact Finalist",
                  desc: "Selected among national finalists"
                },
                {
                  icon: "🎓",
                  title: "IDE Bootcamp · IIT Jammu",
                  desc: "AICTE & MIC entrepreneurship program"
                },
                {
                  icon: "📚",
                  title: "ScienceDirect Indexed",
                  desc: "2 peer-reviewed research papers published"
                }
              ].map((achievement, idx) => (
                <div key={idx} className="flex flex-col justify-center bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] h-[108px] p-[20px]">
                  <div className="text-[18px] mb-2">{achievement.icon}</div>
                  <h4 className="text-[15px] text-[#FFFFFF] font-semibold mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-[14px] text-[rgba(255,255,255,0.55)] leading-[1.6]">
                    {achievement.desc}
                  </p>
                </div>
              ))}
            </div>
            
          </div>

        </div>

      </Container>
    </section>
  );
}
