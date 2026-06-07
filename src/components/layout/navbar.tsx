"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "@/constants/sections";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = (pathname === "/" ? "home" : pathname.replace("/", "")) as "home" | "about" | "work" | "projects" | "research" | "contact";
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="grid h-[54px] w-full grid-cols-2 items-center md:grid-cols-[1fr_auto_1fr]">
            {/* Logo */}
            <div className="flex justify-start">
              <Link
                href="/"
                className="group flex items-center gap-2"
                aria-label="Go to Home"
              >
                <span className="text-xl font-heading font-bold text-foreground transition-colors group-hover:text-primary">
                  Divyam <span className="text-primary">Mishra</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden items-center justify-center gap-8 lg:gap-10 md:flex">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                const href = section.id === "home" ? "/" : `/${section.id}`;
                return (
                  <Link
                    key={section.id}
                    href={href}
                    className={`relative font-mono text-xs uppercase tracking-wider transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {section.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center justify-end gap-4">
              <Button
                asChild
                variant="luxury"
                className="hidden font-mono text-xs uppercase tracking-wider md:inline-flex"
              >
                <Link href="/contact">Hire Me</Link>
              </Button>
              
              <button
                className="p-2 text-foreground md:hidden"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
