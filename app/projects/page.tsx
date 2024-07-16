import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full mt-10">
      <div className="flex flex-col gap-20">
        <Projects />
      </div>
    </main>
  );
}
