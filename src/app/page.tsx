import TrendingDestinations from "@/components/organisms/TrendingDestinations";
import { Test } from "@/components/Test";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TrendingDestinations />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to PostcardTrip
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Next.js 15 app with shadcn/ui and Tailwind CSS v4
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Test />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>

            <Button
              variant="primary"
              animation="primarySolid"
              className="font-semibold"
            >
              Book Now
            </Button>

            <Button
              variant="secondary"
              animation="secondarySolid"
              className="font-semibold"
            >
              Book Now
            </Button>
            <Button
              variant="primaryOutline"
              animation="primaryOutline"
              className="font-semibold"
            >
              Book Now
            </Button>
            <Button
              variant="secondaryOutline"
              animation="secondaryOutline"
              className="font-semibold"
            >
              Book Now
            </Button>
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">N</span>
                </div>
                <h3 className="font-semibold">Next.js 15</h3>
                <p className="text-sm text-muted-foreground">
                  Latest version with App Router and Turbopack
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">S</span>
                </div>
                <h3 className="font-semibold">shadcn/ui</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful and accessible UI components
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-accent rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">T</span>
                </div>
                <h3 className="font-semibold">Tailwind CSS v4</h3>
                <p className="text-sm text-muted-foreground">
                  Latest version with improved performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
