"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const roster = [
  {
    name: "DOTCOMNIRVAN",
    role: "Director",
    social: "@dotcomnirvan",
    href: "https://instagram.com/dotcomnirvan",
    image: "/images/dotcomnirvan.jpg",
    artists: [
      { name: "Yeat", image: "/images/yeat.jpg" },
      { name: "Trippie Redd", image: "/images/trippieredd.jpg" },
      { name: "Glokk40Spaz", image: "/images/glokk40spaz.jpg" },
      { name: "ApolloRed", image: "/images/apollored.jpg" },
    ],
  },
  {
    name: "CAM GREY",
    role: "Director / Creative",
    social: "@thecamgrey",
    href: "https://instagram.com/thecamgrey",
    image: "/images/camgrey.jpg",
    artists: [
      { name: "Rod Wave", image: "/images/rodwave.jpg" },
      { name: "Rich the Kid", image: "/images/richthekid.jpg" },
      { name: "Trippie Redd", image: "/images/trippieredd.jpg" },
      { name: "DDG", image: "/images/ddg.jpg" },
    ],
  },
];

const videos = [
  {
    id: "yvtvUYXDNkQ",
    title: "Turban",
    artist: "Yeat",
    director: "DotComNirvan",
  },
  {
    id: "VxzO-AeFLo4",
    title: "Vice City Blues",
    artist: "1900Rugrat",
    director: "DotComNirvan",
  },
  {
    id: "PmUnzgNETNo",
    title: "Fire In My Heart",
    artist: "Trippie Redd",
    director: "DotComNirvan",
  },
  {
    id: "OvRCI12fdXc",
    title: "Backdoor",
    artist: "Glokk40Spaz",
    director: "DotComNirvan",
  },
  {
    id: "JiNE7r9GVTs",
    title: "Ya Ya",
    artist: "Yeat",
    director: "DotComNirvan",
  },
  {
    id: "uxzPGl_ci9U",
    title: "No Counterfeit",
    artist: "Rich The Kid",
    director: "TheCamGrey",
  },
];

export default function Management() {
  const rosterRef = useInView();
  const slateRef = useInView();

  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase mb-4">
          Management & Producing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          THE ROSTER
        </h1>
        <div className="w-12 h-[2px] bg-[#FF8C00]/40 mb-16" />

        {/* Talent Cards */}
        <div
          className="grid md:grid-cols-2 gap-6 mb-24"
          ref={rosterRef.ref}
        >
          {roster.map((talent, i) => (
            <div
              key={talent.name}
              className={`group relative p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF8C00]/30 hover:bg-white/[0.04] transition-all duration-500 ${
                rosterRef.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={talent.image}
                alt={talent.name}
                className="w-28 h-28 rounded-lg object-cover mb-5"
              />
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight group-hover:text-[#FF8C00] transition-colors mb-3">
                {talent.name}
              </h3>
              <p className="text-lg text-zinc-400 mb-4">{talent.role}</p>
              <a
                href={talent.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#FF8C00] hover:text-[#e67e00] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                {talent.social}
              </a>

              {/* Artists */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                  Artists
                </p>
                <div className="flex flex-wrap gap-3">
                  {talent.artists.map((artist) => (
                    <div
                      key={artist.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]"
                    >
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-sm text-zinc-300">
                        {artist.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Production Slate */}
        <div ref={slateRef.ref}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            PRODUCTION SLATE
          </h2>
          <p className="text-lg text-zinc-400 mb-12">
            Music videos directed by{" "}
            <span className="text-white font-medium">DotComNirvan</span> and{" "}
            <span className="text-white font-medium">TheCamGrey</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={video.id}
                className={`group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-[#FF8C00]/30 hover:bg-white/[0.04] transition-all duration-500 ${
                  slateRef.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`${video.artist} - ${video.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg group-hover:text-[#FF8C00] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">{video.artist}</p>
                  <p className="text-xs font-mono text-zinc-600 mt-2">
                    Dir. by @{video.director}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
