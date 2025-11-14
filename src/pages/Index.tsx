import { ArrowUpRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent text-foreground p-6 md:p-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex items-center justify-between rounded-full bg-accent/0 pb-2 pt-1">
          <nav className="flex flex-wrap items-center gap-3">
            {['The Brand', 'Paucek and Lage'].map((label) => (
              <button
                key={label}
                className="rounded-full border-2 border-foreground bg-transparent px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-foreground hover:text-accent"
              >
                <ArrowUpRight className="mr-2 inline-block h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <span className="pr-2 text-sm font-black tracking-[0.4em] md:text-base lg:text-lg">2024</span>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 md:max-w-sm">
            <p className="text-sm font-medium leading-relaxed tracking-wide">
              Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more. It is mostly presented before an audience.
            </p>
          </div>

          <div className="flex flex-col items-end">
            <h1 className="text-right text-[4rem] font-black leading-none tracking-tight md:text-[5rem] lg:text-[6rem]">
              PRODUCT
              <br />
              PHOTOGRAPHY
            </h1>
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[3rem] bg-[hsl(0,0%,100%)] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.25)] lg:mt-10">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem]">
            <img src={heroPhoto} alt="Product photography showcase" className="h-full w-full object-cover" />
            <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-foreground text-accent">
              <ArrowUpRight className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* About / Creative Brief section */}
        <section className="mt-16 rounded-[3rem] bg-[hsl(210,12%,8%)] p-6 text-accent md:p-10">
          <header className="mx-auto flex max-w-5xl items-center justify-between pb-4 pt-2">
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

          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-accent p-6 text-foreground md:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="flex flex-col justify-center gap-6">
                <h2 className="text-[3.5rem] font-black leading-none tracking-tight md:text-[4.5rem] lg:text-[5rem]">
                  CREATIVE
                  <br />
                  BRIEF
                </h2>

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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
