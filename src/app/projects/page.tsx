import { Projects } from "@/sections/projects";

export const metadata = {
  title: "Projects | Divyam Mishra",
  description: "AI-driven systems and problem-solving projects by Divyam Mishra.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Projects />
    </main>
  );
}
