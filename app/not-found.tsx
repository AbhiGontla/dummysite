import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-navy px-6 text-center">
      <div>
        <p className="font-heading text-8xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white">Page not found</h1>
        <p className="mt-3 text-slate-400">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
