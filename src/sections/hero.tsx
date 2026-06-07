"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CredentialCard } from "@/components/ui/credential-card";
import { Metric } from "@/components/ui/metric";
import { fadeUp, staggerContainer } from "@/animations/motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col justify-start overflow-hidden pt-[100px] pb-8"
    >
      <Container>
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Vertical Divider (Desktop Only) */}
          <div className="absolute bottom-4 left-[70%] top-4 hidden w-[1px] -translate-x-6 bg-white/5 lg:block xl:-translate-x-8" />

          {/* Left Column (Primary Content) - ~70% on lg */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:col-span-8 lg:pr-12 xl:pr-16"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
              <div className="h-[1px] w-6 bg-primary" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-primary">
                ODOO ERP CONSULTANT · DELHI, INDIA
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mb-8 text-[clamp(2.3rem,4vw,4.6rem)] font-heading font-normal leading-[0.95] tracking-[-0.03em] text-white"
            >
              I map the mess,<br />
              then <span className="font-style-italic italic font-normal text-primary/90">fix it.</span><br />
              <span className="font-light text-white/40 text-[0.75em]">Precisely.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-[540px] text-[15px] font-light leading-[1.8] text-white/50"
            >
              ERP implementations. Process mapping. Data migration. I turn operational chaos into clean, working systems — currently doing exactly that at Target Integration, Gurugram. McKinsey Forward '26 alumnus.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                variant="luxury"
                className="h-[42px] px-8 font-mono text-[11px] font-medium uppercase tracking-[0.15em]"
              >
                SEE MY WORK
              </Button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="h-[42px] w-full px-8 font-mono text-[11px] font-medium uppercase tracking-[0.15em] sm:w-auto"
                >
                  DOWNLOAD RESUME
                </Button>
              </a>
            </motion.div>

            {/* Horizontal Divider */}
            <motion.div variants={fadeUp} className="mb-6 h-[1px] w-full max-w-md bg-white/5 hidden lg:block" />

            {/* Metrics */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-12 gap-y-6"
            >
              <Metric value="10K+" label="Records migrated" />
              <div className="hidden h-10 w-[1px] bg-white/10 md:block" />
              <Metric value="3" label="ERP modules" />
              <div className="hidden h-10 w-[1px] bg-white/10 md:block" />
              <Metric value="2" label="Publications" />
              <div className="hidden h-10 w-[1px] bg-white/10 md:block" />
              <Metric value="₹50K" label="IIT prize" />
            </motion.div>
          </motion.div>

          {/* Right Column (Credentials) - ~30% on lg */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 lg:gap-3 lg:col-span-4 lg:pt-8"
          >
            <CredentialCard
              metadata="CURRENTLY ACTIVE · AUG 2025–PRESENT"
              title="Odoo Consultant — Target Integration"
              description="ERP delivery across Sales, Inventory & Accounting.&#10;10K+ records migrated.&#10;Go-live achieved."
            />
            <CredentialCard
              metadata="MCKINSEY & COMPANY · 2026"
              title="McKinsey Forward Program"
              description="10-week global program.&#10;Structured problem-solving.&#10;Consulting frameworks.&#10;AI & digital skills."
            />
            <CredentialCard
              metadata="IIT MADRAS · I2I CHALLENGE"
              title="Finalist + ₹50,000 Prize"
              description="Innovation to Impact challenge.&#10;Awarded for prototype development and business potential."
            />
            <CredentialCard
              metadata="SCIENCEDIRECT INDEXED · 2 PAPERS"
              title="Published Researcher"
              description="AI & Nanomedicine.&#10;Presented at ICSET 2023, Malacca, Malaysia."
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
