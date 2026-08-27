import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Onchain Private Credit Ecosystem",
    template: "%s | Onchain Private Credit Ecosystem",
  },
  description:
    "A research workspace for exploring the onchain private credit ecosystem.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
