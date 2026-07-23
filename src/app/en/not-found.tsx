import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundEn() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-extrabold text-gradient mb-6">404</div>
        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
          This page doesn&apos;t exist or has been moved. How about going back to the home page and exploring the projects?
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/en" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/en/projects" className="btn btn-outline">
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}
