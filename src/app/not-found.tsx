import Link from "next/link";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
        <Icon.Compass className="h-8 w-8" />
      </div>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-mint">404 · Page not found</p>
      <h1 className="mt-3 font-serif text-[clamp(2rem,5vw,3rem)] text-navy-950">This page wandered off campus</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" icon>Back to home</Button>
        <Button href="/portal/overview" variant="outline">Open portals</Button>
      </div>
      <Link href="/" className="mt-6 text-sm text-slate-400 hover:text-navy-950">
        Search instead
      </Link>
    </div>
  );
}
