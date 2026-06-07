"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS, SectionId } from "@/constants/sections";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionId;
}

export function MobileNav({ isOpen, onClose, activeSection }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);



  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/80"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col items-center space-y-8">
              {SECTIONS.map((section, i) => {
                const isActive = activeSection === section.id;
                const href = section.id === "home" ? "/" : `/${section.id}`;
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`text-3xl font-heading tracking-wide transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary/80"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {section.label}
                    </Link>
                  </motion.div>
                );
              })}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: SECTIONS.length * 0.1 }}
              className="pt-8"
            >
              <Button
                asChild
                variant="luxury"
                size="lg"
                className="w-full text-lg"
                onClick={onClose}
              >
                <Link href="/contact">Hire Me</Link>
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
