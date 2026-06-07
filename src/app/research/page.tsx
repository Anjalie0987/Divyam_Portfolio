import { Research } from "@/sections/research";

export const metadata = {
  title: "Research | Divyam Mishra",
  description: "Published research and international conference presentations on AI, healthcare, and nanotechnology.",
};

export default function ResearchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Research />
    </main>
  );
}
