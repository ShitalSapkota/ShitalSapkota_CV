import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    image: "/LinkedIncoverimg.png", // Using existing image as placeholder
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shitalsapkota",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product management and checkout.",
    image: "/LinkedIncoverimg.png", // Using existing image as placeholder
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "A productivity tool for organizing tasks and tracking progress.",
    image: "/LinkedIncoverimg.png", // Using existing image as placeholder
    tags: ["React", "Firebase", "Material UI"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Portfolio</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects, featuring web applications developed with modern technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
