import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex items-start justify-between">
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full border-2 border-foreground bg-transparent px-6 py-2 text-foreground hover:bg-foreground hover:text-background">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              The Brand
            </Button>
            <Button variant="outline" className="rounded-full border-2 border-foreground bg-transparent px-6 py-2 text-foreground hover:bg-foreground hover:text-background">
              Paucek and Lage
            </Button>
          </div>
          <div className="text-4xl font-bold text-foreground">2024</div>
        </header>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <p className="max-w-xs text-sm leading-relaxed text-foreground">
              Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more. It is mostly presented before an audience.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end justify-start">
            <h1 className="mb-8 text-right text-6xl font-bold leading-none text-foreground md:text-7xl lg:text-8xl">
              PRODUCT
              <br />
              PHOTOGRAPHY
            </h1>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="relative mt-12">
          <div className="overflow-hidden rounded-[3rem] bg-card">
            <div className="relative aspect-[21/9] w-full">
              <img
                src={heroPhoto}
                alt="Product photography showcase"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-background">
                <ArrowUpRight className="h-8 w-8 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
