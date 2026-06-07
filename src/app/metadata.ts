import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Divyam | Portfolio",
    template: "%s | Divyam",
  },
  description: "A premium personal portfolio showcasing executive design and research.",
  openGraph: {
    title: "Divyam | Portfolio",
    description: "A premium personal portfolio showcasing executive design and research.",
    url: "https://divyam.example.com",
    siteName: "Divyam Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divyam Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyam | Portfolio",
    description: "A premium personal portfolio showcasing executive design and research.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://divyam.example.com",
  },
};
