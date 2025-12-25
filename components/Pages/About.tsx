import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I’m a Full Stack Developer who enjoys building modern,
            scalable web applications using Next.js and TypeScript.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Image */}


          {/* Info */}
          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl font-semibold">
                Full Stack Developer
              </h3>

              <p className="text-muted-foreground">
                I focus on building clean UI, scalable backends,
                and performant web apps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-medium">Location:</span> Helsinki, Finland</p>
                  <p><span className="font-medium">Degree:</span> Full Stack Development</p>
                </div>
                <div>
                  <p><span className="font-medium">Email:</span> you@example.com</p>
                  <p><span className="font-medium">Freelance:</span> Available</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
