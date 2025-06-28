# Sekel Insights

This is a Next.js web application for Sekel Insights, a data analytics and business intelligence consultancy.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **Email**: [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

*   Node.js (v20 or later)
*   npm

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables for EmailJS integration:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these values from your EmailJS account dashboard.

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the app in development mode, execute the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

*   `src/app/`: Contains the pages and layouts for the Next.js App Router.
*   `src/components/`: Contains reusable React components.
    *   `src/components/ui/`: Contains ShadCN UI components.
*   `src/lib/`: Contains utility functions and server actions.
*   `public/`: Contains static assets like images and fonts.