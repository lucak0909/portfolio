import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Particles from "@/components/particles";
import { getAge, getAcademicYear, getOrdinal } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default function Home() {
  const age = getAge();
  const year = getAcademicYear();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-900/20 to-black">
      <Particles />

      {/* Navigation */}
      <nav className="animate-fade-in fixed top-6 z-10 flex gap-8 text-sm text-zinc-500">
        <Link
          href="/projects"
          className="transition-colors duration-300 hover:text-zinc-300"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="transition-colors duration-300 hover:text-zinc-300"
        >
          Contact
        </Link>
      </nav>

      {/* Glow line top */}
      <div className="animate-glow hidden h-px w-screen md:block" />
      <div className="animate-fade-left my-8 hidden h-px w-screen bg-gradient-to-l from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />

      {/* Title */}
      <h1 className="animate-title z-10 font-sans text-4xl font-bold text-white sm:text-6xl md:text-8xl lg:text-9xl">
        Luca Knierim
      </h1>

      {/* Tagline */}
      <p className="animate-fade-in z-10 mt-6 max-w-xl px-4 text-center text-sm leading-relaxed text-zinc-400 sm:text-base">
        {age} year old {getOrdinal(year)} year immersive software engineering
        student at{" "}
        <span className="text-zinc-300">University of Limerick</span>
      </p>

      {/* Glow line bottom */}
      <div className="animate-fade-right my-8 hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />

      {/* Social links */}
      <div className="animate-fade-in z-10 mt-4 flex gap-6">
        <a
          href="https://github.com/lucak0909"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors duration-300 hover:text-white"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/luca-knierim-082b62329/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors duration-300 hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:lucaknierim@icloud.com"
          className="text-zinc-500 transition-colors duration-300 hover:text-white"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}
