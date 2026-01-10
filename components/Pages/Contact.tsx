"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, type ContactFormData } from "@/lib/ContactFormSchema";
import { submitContactForm } from "@/app/api/contact/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const result = await submitContactForm(data);
            
            if (result.success) {
                toast.success(result.message || "Message sent successfully!");
                reset();
            } else {
                if (result.error) {
                    // Handle field-level errors if any
                    Object.entries(result.error).forEach(([key, value]) => {
                        toast.error(`${key}: ${value.join(", ")}`);
                    });
                } else {
                    toast.error(result.message || "Failed to send message. Please try again.");
                }
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl font-bold">Contact</h2>
                    <p className="mt-4 text-muted-foreground">
                        Feel free to reach out for collaborations, opportunities, or just a
                        friendly hello.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-5">
                        <Card className="h-full">
                            <CardContent className="space-y-6 pt-6">
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                                    <div>
                                        <h4 className="font-medium">Location</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Turku, Finland
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <Mail className="mt-1 h-5 w-5 text-primary" />
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-sm text-muted-foreground">
                                            shital.sapkota1@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <Phone className="mt-1 h-5 w-5 text-primary" />
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <p className="text-sm text-muted-foreground">
                                            +358 413120457
                                        </p>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="overflow-hidden rounded-md border">
                                    <iframe
                                        title="Map"
                                        src="https://www.google.com/maps?q=Turku&output=embed"
                                        className="h-[280px] w-full"
                                        loading="lazy"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Your Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                {...register("name")}
                                                className={errors.name ? "border-destructive" : ""}
                                            />
                                            {errors.name && (
                                                <p className="text-xs text-destructive">{errors.name.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Your Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                {...register("email")}
                                                className={errors.email ? "border-destructive" : ""}
                                            />
                                            {errors.email && (
                                                <p className="text-xs text-destructive">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="How can I help you?"
                                            {...register("subject")}
                                            className={errors.subject ? "border-destructive" : ""}
                                        />
                                        {errors.subject && (
                                            <p className="text-xs text-destructive">{errors.subject.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Your Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Write your message here..."
                                            rows={6}
                                            {...register("message")}
                                            className={errors.message ? "border-destructive" : ""}
                                        />
                                        {errors.message && (
                                            <p className="text-xs text-destructive">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full sm:w-auto"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
