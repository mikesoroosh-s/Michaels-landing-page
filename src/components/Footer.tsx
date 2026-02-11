import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Michael Sorooshian</p>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hover:text-[#FF8C00] transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </footer>
  );
}
