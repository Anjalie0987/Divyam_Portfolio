import { Contact } from "@/sections/contact";

export const metadata = {
  title: "Contact | Divyam Mishra",
  description: "Get in touch for consulting engagements, analyst roles, and interesting conversations.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#050505]">
      <Contact />
    </main>
  );
}
