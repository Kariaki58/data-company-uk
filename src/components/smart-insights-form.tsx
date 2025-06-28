"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getSmartInsights } from "@/lib/actions";
import type { AnalyzeDataOutput } from "@/ai/flows/smart-insights";
import { Loader2, Lightbulb, BarChart, BarChart2, AlertTriangle } from "lucide-react";

const formSchema = z.object({
  data: z.string().min(10, { message: "Please provide some data to analyze (at least 10 characters)." }),
  industry: z.string().min(2, { message: "Please enter your industry." }),
  objective: z.string().min(10, { message: "Please describe your analysis objective." }),
});

export function SmartInsightsForm() {
  const [result, setResult] = useState<AnalyzeDataOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      data: "",
      industry: "",
      objective: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const response = await getSmartInsights(values);

    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setResult(response.data);
    }

    setIsLoading(false);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Generate Smart Insights</CardTitle>
          <CardDescription>
            Enter your data, industry, and objective below. Our AI will analyze
            it and provide key trends and recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="data"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your data here (e.g., CSV, JSON, or plain text)"
                        className="min-h-[150px] font-code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., E-commerce, Real Estate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="objective"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Analysis Objective</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Identify customer churn factors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Generate Insights"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        {isLoading && (
            <Card className="flex flex-col items-center justify-center h-full">
                <CardContent className="text-center p-6">
                    <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="text-lg font-medium text-muted-foreground">Generating your insights...</p>
                    <p className="text-sm text-muted-foreground">This may take a moment.</p>
                </CardContent>
            </Card>
        )}

        {error && (
          <Card className="border-destructive">
            <CardHeader className="flex flex-row items-center gap-2 text-destructive">
                <AlertTriangle className="w-6 h-6"/>
                <CardTitle>Analysis Failed</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{error}</p>
            </CardContent>
          </Card>
        )}

        {result && (
            <>
            <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary"/>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground whitespace-pre-wrap">{result.summary}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                    <BarChart className="w-6 h-6 text-primary"/>
                    <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground whitespace-pre-wrap">{result.recommendations}</p>
                </CardContent>
            </Card>
            </>
        )}

        {!isLoading && !error && !result && (
            <Card className="flex flex-col items-center justify-center h-full bg-secondary">
                 <CardContent className="text-center p-6">
                    <BarChart2 className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium text-muted-foreground">Your insights will appear here.</p>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}
