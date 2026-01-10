'use server'

import { z } from "zod";
import { ContactFormSchema } from "@/lib/ContactFormSchema";
import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: unknown) {
    // 1. Validate the data against our schema
    const validatedFields = ContactFormSchema.safeParse(formData);

    // If validation fails, return the errors
    if (!validatedFields.success) {
        return {
            success: false,
            error: z.flattenError(validatedFields.error).fieldErrors,
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        // 2. Insert the data into Supabase
        const { error } = await supabase
            .from("contact_submissions")
            .insert([
                { name, email, subject, message }
            ]);

        if (error) throw error;

        return {
            success: true,
            message: "Message sent successfully!",
        };
    } catch (error) {
        console.error("Database Error:", error);
        return {
            success: false,
            message: "Failed to send message. Please try again later.",
        };
    }
}