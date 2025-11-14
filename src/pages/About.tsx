import { ArrowUpRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-[hsl(210,12%,8%)] text-accent p-6 md:p-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex items-center justify-between pb-4 pt-2">
          <nav className="flex flex-wrap items-center gap-3">
            {['Paucek and Lage', 'Presentation'].map((label) => (
              <button
                key={label}
                className="rounded-full border border-accent px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-[hsl(210,12%,8%)]"
              >
                <ArrowUpRight className="mr-2 inline-block h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
            <span className="h-px flex-1 bg-accent/60" />
            <span className="flex items-center gap-1 text-xs tracking-[0.3em]">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </span>
          </div>
        </header>

        <main className="rounded-[3rem] bg-accent text-foreground p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-[3.5rem] font-black leading-none tracking-tight md:text-[4.5rem] lg:text-[5rem]">
                CREATIVE
                <br />
                BRIEF
              </h1>

              <p className="max-w-md text-sm font-medium leading-relaxed tracking-wide">
                Presentations serve as versatile communication tools, utilized for demonstrations, lectures, speeches, and more.
                Typically delivered before an audience, they fulfill various purposes, making presentations powerful tools for both
                persuasion and education.
              </p>
            </div>

            <div className="relative mt-2 overflow-hidden rounded-[2.5rem] bg-[hsl(0,0%,100%)] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                <img
                  src={heroPhoto}
                  alt="Creative brief collaboration"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground bg-foreground text-accent">
                  <ArrowUpRight className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
