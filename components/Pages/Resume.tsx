import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Resume() {
    return (
        <section id="resume" className="py-20">
            <div className="container mx-auto px-4">
                {/* Section title */}
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl font-bold">Resume</h2>
                    <p className="mt-4 text-muted-foreground">
                        A brief overview of my education, experience, and professional
                        background.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Left column */}
                    <div className="space-y-8">
                        {/* Summary */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Summary</h3>
                            <Card>
                                <CardContent className="pt-6">
                                    <h4 className="text-lg font-medium">Shital Sapkota</h4>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Innovative and deadline-driven Full Stack Developer with experience
                                        building modern, scalable web applications using React,
                                        Next.js, and TypeScript.
                                    </p>

                                    <ul className="mt-4 space-y-1 text-sm">
                                        <li>Turku, Finland</li>
                                        <li>shital.sapkota1@gmail.com</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Education</h3>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">
                                        Vocational Qualification in Information and Communication Technology
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        2024 – Present
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm italic">
                                        Business College Helsinki, Helsinki, Finland
                                    </p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Focusing on modern web development including React, TypeScript,
                                        Node.js, databases, and cloud deployment.
                                    </p>
                                </CardContent>
                            </Card>

                            <Separator className="my-4" />

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">
                                        Bachelor of Science in Information Technology
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        2013 – 2016
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm italic">
                                        Sky International College Affiliated by Sikkim Manipal University, Nepal
                                    </p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Gained a solid foundation in computer science principles, software development, and database management.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        <h3 className="mb-4 text-xl font-semibold">
                            Professional Experience
                        </h3>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">
                                        Frontend / Full Stack Developer - Internship
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Aug, 2025 – Present
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm italic">
                                        Resimator OY, Turku, Finland
                                    </p>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                        <li>
                                            Building responsive and accessible UI components using React,
                                            Next.js, and Tailwind CSS.
                                        </li>
                                        <li>
                                            Integrating REST APIs and handling application state
                                            efficiently.
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Separator />

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">
                                        Academic Lecturer
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        2020 – 2021
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm italic">
                                        Itahari International College/ ING Group, Nepal
                                    </p>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                        <li>
                                            Introduces Python web-frameworks to students such as,
                                            Flask, Django and also with JavaScript and Database
                                            (SQL).
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
