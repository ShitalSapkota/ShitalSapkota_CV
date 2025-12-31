import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-2xl border shadow-lg lg:col-start-1 lg:col-end-3">
            <Image
              src="/LinkedIncoverimg.png"
              alt="Shital Sapkota"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Info */}
          <Card className="lg:col-start-3 lg:col-end-5">
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
                  <p><span className="font-medium">Location:</span> Turku, Finland</p>
                  <p><span className="font-medium">Phone:</span> +358413120457</p>
                </div>
                <div>
                  <p><span className="font-medium">Email:</span> shital.sapkota1@gmail.com</p>
                  <p><span className="font-medium">Job:</span> On-site / Remote available</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
