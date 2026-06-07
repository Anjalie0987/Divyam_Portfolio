"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject || formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setIsSuccess(false);

    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setSubmitError("Please wait before sending another message.");
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLastSubmitTime(Date.now());
    } catch (error: any) {
      console.error("Contact Form Error:", error);
      setSubmitError(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="contact" className="relative flex w-full flex-col justify-start bg-[#050505] text-[#ffffff] min-h-screen">
      
      {/* Hero Section */}
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center w-full min-h-[50vh] pt-[120px]"
        >
          {/* Small Label */}
          <div className="mb-[32px] flex items-center justify-center gap-3">
            <div className="h-[1px] w-6 bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[4px] text-[#D4AF37] font-mono">
              GET IN TOUCH
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[56px] font-[500] leading-[0.92] text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="text-white block">Let's solve</span>
            <span className="italic text-[#D4AF37] block">something together</span>
          </h1>
          
          {/* Description */}
          <p className="max-w-[700px] text-[14px] leading-[1.9] text-[rgba(255,255,255,0.65)] mt-[40px] text-center mx-auto">
            Open to consulting engagements, analyst roles, and interesting conversations. I typically respond within 24 hours.
          </p>
        </motion.div>
      </Container>

      {/* Contact Section */}
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row w-full mt-[60px] pb-[80px]"
        >
          {/* Left Column: SEND A MESSAGE */}
          <div className="w-full lg:w-1/2 lg:pr-[60px] lg:border-r border-[rgba(255,255,255,0.08)] mb-[64px] lg:mb-0">
            <motion.div variants={formVariants} className="flex items-center gap-[12px] mb-[40px]">
              <span className="text-[10px] uppercase tracking-[4px] text-[#D4AF37] font-mono">SEND A MESSAGE</span>
              <div className="h-[1px] flex-1 bg-[rgba(255,255,255,0.08)]" />
            </motion.div>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              <motion.div variants={formVariants} className="flex flex-col gap-[8px]">
                <label className="text-[9px] tracking-[2px] font-mono text-[rgba(255,255,255,0.6)] uppercase">YOUR NAME</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma" 
                  className={`h-[48px] px-[18px] bg-[#0b0b0b] border ${errors.name ? 'border-[#ff6b6b]' : 'border-[rgba(255,255,255,0.08)]'} text-[rgba(255,255,255,0.8)] placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#D4AF37] transition-colors`}
                />
                {errors.name && <span className="text-[#ff6b6b] text-[12px]">{errors.name}</span>}
              </motion.div>

              <motion.div variants={formVariants} className="flex flex-col gap-[8px]">
                <label className="text-[9px] tracking-[2px] font-mono text-[rgba(255,255,255,0.6)] uppercase">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@company.com" 
                  className={`h-[48px] px-[18px] bg-[#0b0b0b] border ${errors.email ? 'border-[#ff6b6b]' : 'border-[rgba(255,255,255,0.08)]'} text-[rgba(255,255,255,0.8)] placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#D4AF37] transition-colors`}
                />
                {errors.email && <span className="text-[#ff6b6b] text-[12px]">{errors.email}</span>}
              </motion.div>

              <motion.div variants={formVariants} className="flex flex-col gap-[8px]">
                <label className="text-[9px] tracking-[2px] font-mono text-[rgba(255,255,255,0.6)] uppercase">WHAT'S THIS ABOUT?</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Consulting / collaboration / opportunity" 
                  className={`h-[48px] px-[18px] bg-[#0b0b0b] border ${errors.subject ? 'border-[#ff6b6b]' : 'border-[rgba(255,255,255,0.08)]'} text-[rgba(255,255,255,0.8)] placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#D4AF37] transition-colors`}
                />
                {errors.subject && <span className="text-[#ff6b6b] text-[12px]">{errors.subject}</span>}
              </motion.div>

              <motion.div variants={formVariants} className="flex flex-col gap-[8px]">
                <label className="text-[9px] tracking-[2px] font-mono text-[rgba(255,255,255,0.6)] uppercase">MESSAGE</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..." 
                  className={`h-[160px] p-[18px] bg-[#0b0b0b] border ${errors.message ? 'border-[#ff6b6b]' : 'border-[rgba(255,255,255,0.08)]'} text-[rgba(255,255,255,0.8)] placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none`}
                />
                {errors.message && <span className="text-[#ff6b6b] text-[12px]">{errors.message}</span>}
              </motion.div>

              <motion.div variants={formVariants} className="flex flex-col gap-[16px] mt-[8px]">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-[52px] bg-[#D4AF37] text-black font-mono tracking-[2px] text-[10px] uppercase transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-[#E0BB4A] hover:-translate-y-[2px]'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-[8px]">
                      <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SENDING...
                    </span>
                  ) : (
                    "SEND MESSAGE →"
                  )}
                </button>
                
                {submitError && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#ff6b6b] text-[14px] text-center font-medium">
                    {submitError}
                  </motion.span>
                )}
                
                {isSuccess && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#4CAF50] text-[14px] text-center font-medium flex flex-col items-center">
                    <span>Message sent successfully. I'll get back to you soon.</span>
                  </motion.div>
                )}
              </motion.div>
            </form>
          </div>

          {/* Right Column: DIRECT CONTACT */}
          <div className="w-full lg:w-1/2 lg:pl-[60px]">
            <motion.div variants={formVariants} className="flex items-center gap-[12px] mb-[40px]">
              <span className="text-[10px] uppercase tracking-[4px] text-[#D4AF37] font-mono">DIRECT CONTACT</span>
              <div className="h-[1px] flex-1 bg-[rgba(255,255,255,0.08)]" />
            </motion.div>

            <div className="flex flex-col gap-[16px]">
              {/* Card 1 */}
              <motion.div variants={formVariants} className="flex items-center gap-[16px] h-[72px] px-[24px] bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(212,175,55,0.35)] cursor-pointer">
                <span className="text-[20px] opacity-80">📧</span>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-[2px] text-[rgba(255,255,255,0.4)] font-mono mb-[2px]">EMAIL</span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.8)]">divyammishra2004@gmail.com</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={formVariants} className="flex items-center gap-[16px] h-[72px] px-[24px] bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(212,175,55,0.35)] cursor-pointer">
                <span className="text-[20px] opacity-80">📞</span>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-[2px] text-[rgba(255,255,255,0.4)] font-mono mb-[2px]">PHONE</span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.8)]">+91 96434 11196</span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={formVariants} className="flex items-center gap-[16px] h-[72px] px-[24px] bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(212,175,55,0.35)] cursor-pointer">
                <span className="text-[20px] opacity-80">💼</span>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-[2px] text-[rgba(255,255,255,0.4)] font-mono mb-[2px]">LINKEDIN</span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.8)]">linkedin.com/in/divyammishra</span>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={formVariants} className="flex items-center gap-[16px] h-[72px] px-[24px] bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(212,175,55,0.35)] cursor-pointer">
                <span className="text-[20px] opacity-80">🖥</span>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-[2px] text-[rgba(255,255,255,0.4)] font-mono mb-[2px]">GITHUB</span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.8)]">github.com/divyammishra</span>
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div variants={formVariants} className="flex items-center gap-[16px] h-[72px] px-[24px] bg-[#0b0b0b] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(212,175,55,0.35)] cursor-pointer">
                <span className="text-[20px] opacity-80">📍</span>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-[2px] text-[rgba(255,255,255,0.4)] font-mono mb-[2px]">LOCATION</span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.8)]">Delhi / Gurugram · Open to remote</span>
                </div>
              </motion.div>

              {/* Availability Card */}
              <motion.div variants={formVariants} className="flex items-start md:items-center gap-[16px] min-h-[72px] py-[16px] px-[24px] bg-[rgba(22,70,40,0.15)] border border-[rgba(76,175,80,0.35)] mt-[8px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#4CAF50] animate-pulse mt-[6px] md:mt-0 flex-shrink-0" />
                <div className="flex flex-col justify-center">
                  <span className="text-[13px] font-[500] text-[#4CAF50] mb-[2px]">Open to opportunities</span>
                  <span className="text-[12px] text-[rgba(255,255,255,0.55)]">Consulting roles · Analyst positions · Freelance engagements</span>
                </div>
              </motion.div>

              {/* Resume Card */}
              <motion.div variants={formVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] min-h-[72px] py-[16px] px-[24px] bg-[#0b0b0b] border border-[rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[rgba(212,175,55,0.4)] mt-[8px]">
                <div className="flex flex-col justify-center">
                  <span className="text-[14px] text-white font-[500] mb-[2px]">Divyam Mishra — Resume</span>
                  <span className="text-[12px] text-[rgba(255,255,255,0.5)]">PDF · Updated 2025</span>
                </div>
                <a href="#" className="h-[36px] px-[20px] bg-[#d4af37] text-[#050505] font-[600] font-mono text-[9px] tracking-[2px] flex items-center justify-center transition-colors hover:bg-white flex-shrink-0">
                  DOWNLOAD
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </Container>



    </section>
  );
}
