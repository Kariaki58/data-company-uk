'use server';
/**
 * @fileOverview AI-powered analysis of client data to identify key trends and insights.
 *
 * - analyzeData - A function that handles the data analysis process.
 * - AnalyzeDataInput - The input type for the analyzeData function.
 * - AnalyzeDataOutput - The return type for the analyzeData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeDataInputSchema = z.object({
  data: z
    .string()
    .describe(
      'The client data to analyze.  This can be in any format, but CSV or JSON is preferred.'
    ),
  industry: z.string().describe('The industry of the client.'),
  objective: z.string().describe('The objective of the analysis.'),
});
export type AnalyzeDataInput = z.infer<typeof AnalyzeDataInputSchema>;

const AnalyzeDataOutputSchema = z.object({
  summary: z.string().describe('A summary of the key trends and insights.'),
  recommendations: z
    .string()
    .describe('Recommendations based on the analysis.'),
});
export type AnalyzeDataOutput = z.infer<typeof AnalyzeDataOutputSchema>;

export async function analyzeData(input: AnalyzeDataInput): Promise<AnalyzeDataOutput> {
  return analyzeDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeDataPrompt',
  input: {schema: AnalyzeDataInputSchema},
  output: {schema: AnalyzeDataOutputSchema},
  prompt: `You are a data analysis expert specializing in providing insights to clients.

You will analyze the client's data and identify key trends and insights based on their industry and objectives.

Industry: {{{industry}}}
Objective: {{{objective}}}
Data: {{{data}}}

You will then provide a summary of your findings and recommendations to the client.
`,
});

const analyzeDataFlow = ai.defineFlow(
  {
    name: 'analyzeDataFlow',
    inputSchema: AnalyzeDataInputSchema,
    outputSchema: AnalyzeDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
