import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "ClauseVault",
    template: "%s | ClauseVault",
  },
  description:
    "ClauseVault is an Australian contract clause library with drag-and-drop document builder. Browse, search, and assemble contract clauses for common commercial agreements.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-bg)]">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col md:ml-[var(--sidebar-width)]">
            <Header />
            <main className="flex-1 p-4 md:p-8">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
