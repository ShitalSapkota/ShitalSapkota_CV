import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "Flask"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="mb-10 text-center text-3xl font-bold">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title} className="transition hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
