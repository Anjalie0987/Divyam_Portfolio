"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "ODOO ERP",
  "REQUIREMENT GATHERING",
  "PROCESS MAPPING",
  "UAT FACILITATION",
  "DATA MIGRATION",
  "MCKINSEY FORWARD '26",
  "SCIENCEDIRECT INDEXED",
  "IIT MADRAS I2I FINALIST",
  "ICSET 2023 · MALAYSIA",
  "10,000+ RECORDS MIGRATED",
  "SQL · EXCEL · PYTHON",
];

export function Marquee() {
  // Double the items so the loop is seamless
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative flex h-[38px] min-h-[38px] max-h-[38px] w-full items-center overflow-hidden whitespace-nowrap bg-[#E8C84A]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex h-full w-max items-center whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex h-full shrink-0 items-center border-r border-[rgba(0,0,0,0.10)] px-[36px] whitespace-nowrap"
          >
            <span className="font-mono text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-[#111111] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
