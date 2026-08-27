import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
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
        <Sidebar />
        <main className="lg:pl-60">{children}</main>
      </body>
    </html>
  );
}
