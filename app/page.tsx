// import Image from "next/image";

import Grid from "@/component/Grid";
import Hero from "@/component/Hero";
import RecentProjects from "@/component/RecentProjects";
import { FloatingNav } from "@/component/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
