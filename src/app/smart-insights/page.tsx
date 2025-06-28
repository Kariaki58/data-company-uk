import { SmartInsightsForm } from "@/components/smart-insights-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Insights Tool',
  description: 'Leverage our AI-powered tool to analyze your data and uncover key trends, insights, and actionable recommendations for your business.',
};

export default function SmartInsightsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          AI-Powered Smart Insights
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Turn your raw data into strategic assets. Our intelligent analysis tool helps you identify trends, opportunities, and actionable steps to drive your business forward.
        </p>
      </div>
      <SmartInsightsForm />
    </div>
  );
}
