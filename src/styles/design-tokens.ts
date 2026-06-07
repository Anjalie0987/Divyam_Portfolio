export const colors = {
  background: {
    primary: "#080808",
    secondary: "#111111",
    card: "#171717",
  },
  gold: {
    primary: "#E8C84A",
    muted: "#C8A830",
  },
  text: {
    primary: "#F5F5F5",
    secondary: "#9A9A9A",
  },
  border: "rgba(255, 255, 255, 0.08)",
} as const;

export const spacing = {
  section: {
    padding: {
      y: "py-24 md:py-32",
      x: "px-6 md:px-12 lg:px-24",
    },
  },
  container: {
    max: "max-w-7xl mx-auto",
  },
} as const;

export const radius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

export const zIndex = {
  navbar: 50,
  dropdown: 100,
  modal: 150,
  toast: 200,
} as const;

export const typography = {
  h1: "text-[clamp(2.5rem,5vw,5.625rem)] font-heading tracking-tight",
  h2: "text-[clamp(2rem,4vw,3.5rem)] font-heading tracking-tight",
  h3: "text-[clamp(1.75rem,3vw,2.5rem)] font-heading",
  h4: "text-[clamp(1.5rem,2.5vw,2rem)] font-heading",
  body: "text-[clamp(0.875rem,1.5vw,1.125rem)] text-secondary-text font-sans leading-relaxed",
  label: "text-xs md:text-sm font-mono tracking-wider uppercase text-secondary-text",
} as const;

export const shadows = {
  glow: "0 0 40px -10px rgba(232, 200, 74, 0.15)",
  card: "0 4px 24px -4px rgba(0, 0, 0, 0.5)",
} as const;
