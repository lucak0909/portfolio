import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Luca Knierim",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-900/20 to-black px-6 py-24 sm:px-12">
      {/* Back nav */}
      <div className="animate-fade-in mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      <h1 className="fade-in-delay-3 mx-auto mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Projects
      </h1>

      {/* Divider */}
      <div className="fade-in-delay-4 mx-auto mt-4 h-px max-w-4xl bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0" />

      {/* Project grid */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
            style={{
              opacity: 0,
              animation: `fade-in 1s ease forwards`,
              animationDelay: `${300 + i * 100}ms`,
            }}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-white">
                {project.title}
              </h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 shrink-0 text-zinc-500 transition-colors hover:text-white"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
