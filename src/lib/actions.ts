"use server";

import { analyzeData, AnalyzeDataInput } from "@/ai/flows/smart-insights";
import { z } from "zod";

const formSchema = z.object({
  data: z.string().min(10, "Data must be at least 10 characters."),
  industry: z.string().min(2, "Industry is required."),
  objective: z.string().min(10, "Objective is required."),
});

export async function getSmartInsights(values: AnalyzeDataInput) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid input. Please check your fields and try again.",
      data: null,
    };
  }

  try {
    const result = await analyzeData(validatedFields.data);
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to generate insights. The AI model may be temporarily unavailable. Please try again later.",
      data: null,
    };
  }
}
