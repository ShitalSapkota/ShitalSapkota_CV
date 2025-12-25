import Image from "next/image";
import Link from "next/link";
import {
    Home,
    User,
    FileText,
    Briefcase,
    Mail,
    LucideIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const navItems: NavItem[] = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#resume", label: "Resume", icon: FileText },
    { href: "#portfolio", label: "Portfolio", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
];

export default function Header() {
    return (
        <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r bg-background md:block">
            <div className="flex h-full flex-col items-center px-6 py-8">
                {/* Profile */}
                <div className="flex flex-col items-center text-center">
                    <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border">
                        <Image
                            src="/profile/profile.JPG"
                            alt="Shital Sapkota"
                            fill
                            sizes="120px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="mt-4 text-xl font-bold tracking-tight">
                        Shital Sapkota
                    </h1>
                </div>

                {/* Social links */}
                <div className="mt-4 flex gap-4">
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <LinkedinIcon className="h-5 w-5" />
                    </Link>

                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </Link>

                    <Link
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <XIcon className="h-5 w-5" />
                    </Link>
                </div>

                <Separator className="my-8" />

                {/* Navigation */}
                <nav className="w-full">
                    <ul className="space-y-2">
                        {navItems.map(({ href, label, icon: Icon }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto pt-8 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Shital Sapkota
                </div>
            </div>
        </aside>
    );
}
