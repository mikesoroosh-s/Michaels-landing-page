export default function About() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Photo */}
          <div>
            <img
              src="/images/michael.jpg"
              alt="Michael Sorooshian"
              className="w-full max-w-md rounded-lg object-cover aspect-square"
            />
          </div>

          {/* Right — Bio */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              <span className="text-[#FF8C00]">STRATEGY</span>{" "}
              <span className="text-zinc-500">x</span>{" "}
              <span className="text-[#FF8C00]">CREATIVE</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#FF8C00]/40 my-6" />
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              I&apos;m Michael — a 24-year-old creative producer and proud UCLA
              Bruin based in Los Angeles. My passion lives at the crossroads of
              music, visual storytelling, and digital culture.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              After graduating from UCLA, I dove headfirst into the music
              industry, working with{" "}
              <span className="text-white font-medium">Dotcomnirvan</span>{" "}
              where I helped produce videos that connected artists with their
              audiences in meaningful ways.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Today I manage a roster of elite directors and creatives,
              overseeing production from concept to delivery — negotiating
              deals, managing budgets, and making sure every frame hits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
