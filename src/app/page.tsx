import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center min-h-[80vh]">
          {/* Left — Image tile */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
            <img
              src="/images/michael.jpg"
              alt="Michael Sorooshian"
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
            {/* Orange film-burn overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#FF8C00]/20 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/30 via-transparent to-[#0a0a0a]/90" />
            <div className="absolute inset-0 bg-[#0a0a0a]/30" />
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center lg:pl-8">
            <p className="text-xs font-mono tracking-[0.3em] text-[#FF8C00] uppercase mb-6 opacity-0 animate-fade-in-up">
              Executive Producer
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-4 opacity-0 animate-fade-in-up delay-100 glow-orange">
              MICHAEL
              <br />
              SOROOSHIAN
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 font-light tracking-wide mb-10 opacity-0 animate-fade-in-up delay-200">
              CREATIVE PRODUCER&ensp;|&ensp;MANAGER
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-10 opacity-0 animate-fade-in-up delay-300">
              <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-2xl sm:text-3xl font-bold text-[#FF8C00]">
                  100M+
                </p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
                  Total Views
                </p>
              </div>
              <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-2xl sm:text-3xl font-bold text-[#FF8C00]">
                  20+
                </p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
                  Artists Worked With&ensp;|&ensp;UCLA &apos;24
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400">
              <Link
                href="/management"
                className="px-8 py-3.5 rounded-full bg-[#FF8C00] text-black font-semibold text-sm tracking-wide text-center hover:bg-[#e67e00] transition-colors"
              >
                VIEW PRODUCTION SLATE
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-[#FF8C00] text-[#FF8C00] font-semibold text-sm tracking-wide text-center hover:bg-[#FF8C00]/10 transition-colors"
              >
                START A PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
