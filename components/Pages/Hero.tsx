"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const roles = ["Developer", "Full Stack Engineer", "Freelancer", "Programmer"];

export default function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index % roles.length];
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting
                    ? current.substring(0, prev.length - 1)
                    : current.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === current) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <section
            id="hero"
            className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center"
        >
            <div className="container max-w-4xl space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                        Hi, I&apos;m <span className="text-primary">Shital Sapkota</span>
                    </h1>

                    <div className="mx-auto h-8 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
                        I&apos;m a{" "}
                        <span className="text-foreground">
                            {text}
                            <span className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-primary align-middle"></span>
                        </span>
                    </div>
                </div>

                <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                    Passionate about building scalable web applications and solving complex problems with modern technologies.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-12 px-8">
                        <Link href="#portfolio">
                            View My Work
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8">
                        <Link href="#resume" className="flex items-center">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
