import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cupertino — Digital Designer & Developer",
  description: "A thoughtful portfolio for a digital designer and developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}