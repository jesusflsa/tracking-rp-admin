import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle-button";

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function generateViewport() {
  return { width: "device-width", initialScale: 1 };
}

export const metadata: Metadata = {
  title: "Aplicación de Tickets - Escuela RP",
  description: "Aplicación de tickets para Escuela RP. Ingrese el código del ticket y vea el estado de su solicitud.",
  authors: { name: "jesusfs", url: "https://x.com/whoisjesusfs" },
  keywords: "tickets, estado de solicitud, Escuela RP, soporte",
  openGraph: {
    title: "Aplicación de Tickets - Escuela RP",
    description: "Aplicación de tickets para Escuela RP. Ingrese el código del ticket y vea el estado de su solicitud.",
    type: "website",
    siteName: "Escuela RP",
  },
  twitter: {
    title: "Aplicación de Tickets - Escuela RP",
    description: "Aplicación de tickets para Escuela RP. Ingrese el código del ticket y vea el estado de su solicitud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>
            <div className="absolute top-5 right-5">
              <ModeToggle />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
