"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight hover:text-violet-400 transition-colors"
        >
          MS
        </a>
        <div className="flex items-center gap-8">
          {["About", "Management", "Work", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-gradient" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px] animate-gradient delay-300" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up">
          Creative Producer &bull; UCLA Grad
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 opacity-0 animate-fade-in-up delay-100 glow">
          Michael
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Sorooshian
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-200">
          Crafting compelling visual stories at the intersection of music,
          media, and culture.
        </p>
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <a
            href="#about"
            className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
            A little about me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
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
              When I&apos;m not creating, you&apos;ll find me exploring LA with
              my awesome boyfriend Evan, chasing sunsets and seeking out the
              next great story to tell.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Los Angeles, CA" },
                { label: "Education", value: "UCLA" },
                { label: "Industry", value: "Music & Media" },
                { label: "Focus", value: "Video Production" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/20 transition-colors"
                >
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagementSection() {
  const { ref, isVisible } = useInView();

  const roster = [
    {
      name: "DOTCOMNIRVAN",
      role: "Director",
      social: "@dotcomnirvan",
      href: "https://instagram.com/dotcomnirvan",
      image: "/images/dotcomnirvan.jpg",
      artists: ["Yeat", "Trippie Redd", "Glokk40Spaz", "ApolloRed"],
    },
    {
      name: "CAM GREY",
      role: "Director / Creative",
      social: "@thecamgrey",
      href: "https://instagram.com/thecamgrey",
      image: "/images/camgrey.jpg",
      artists: ["Rod Wave", "Rich the Kid", "Trippie Redd", "DDG"],
    },
  ];

  const operations = [
    {
      title: "Negotiations",
      description:
        "Lead deal flow for all partnerships, label contracts, and talent agreements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
        </svg>
      ),
    },
    {
      title: "Production",
      description:
        "End-to-end on-set producing and logistical management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11"/>
          <rect x="2" y="6" width="14" height="12" rx="2"/>
        </svg>
      ),
    },
    {
      title: "Budgeting",
      description:
        "Strategic allocation of shoot budgets and vendor-side negotiations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="management" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">
            Management
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            The Roster
          </h2>
          <p className="text-lg text-zinc-400 mb-12">
            Talent I manage and represent.
          </p>
        </div>

        {/* Talent Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {roster.map((talent, i) => (
            <div
              key={talent.name}
              className={`group relative p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={talent.image}
                alt={talent.name}
                className="w-28 h-28 rounded-lg object-cover mb-5"
              />
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight group-hover:text-violet-400 transition-colors mb-3">
                {talent.name}
              </h3>
              <p className="text-lg text-zinc-400 mb-4">{talent.role}</p>
              <a
                href={talent.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-violet-400 hover:text-violet-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                {talent.social}
              </a>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                  Artists
                </p>
                <div className="flex flex-wrap gap-2">
                  {talent.artists.map((artist) => (
                    <span
                      key={artist}
                      className="px-3 py-1 text-sm rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operations */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold tracking-tight mb-8 uppercase">
            Operations
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {operations.map((op, i) => (
            <div
              key={op.title}
              className={`group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 200}ms` }}
            >
              <div className="text-violet-400 mb-4">{op.icon}</div>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                {op.title}
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {op.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const { ref, isVisible } = useInView();

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

  return (
    <section id="work" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Videos I&apos;ve worked on
          </h2>
          <p className="text-lg text-zinc-400 mb-12">
            Music videos directed by{" "}
            <span className="text-white font-medium">DotComNirvan</span> and{" "}
            <span className="text-white font-medium">TheCamGrey</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={video.id}
              className={`group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
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
                <h3 className="font-semibold text-lg group-hover:text-violet-400 transition-colors">
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
    </section>
  );
}

function ExperienceSection() {
  const { ref, isVisible } = useInView();

  const experiences = [
    {
      role: "Video Producer",
      company: "Dotcomnirvan",
      period: "Music Industry",
      description:
        "Produced compelling video content for artists and brands, collaborating on creative direction, editing, and post-production to deliver visual stories that resonated with audiences.",
      tags: ["Video Production", "Creative Direction", "Post-Production"],
    },
    {
      role: "Graduate",
      company: "UCLA",
      period: "University of California, Los Angeles",
      description:
        "Earned my degree from one of the top universities in the world, building a strong foundation in creative thinking, collaboration, and problem-solving.",
      tags: ["Education", "Creative Thinking", "Collaboration"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 px-6"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
            Where I&apos;ve been
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-violet-400/80 font-medium">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-zinc-500 font-mono whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-12">
            Have a project in mind or just want to connect? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:hello@michaelsorooshian.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:from-violet-500 hover:to-indigo-500 transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Michael Sorooshian</p>
        <p className="font-mono text-xs">Built with Next.js</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ManagementSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
