import Encryption from "@/components/main/Profile";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Encryption />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
