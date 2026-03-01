import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "Contact — Luca Knierim",
};

const contacts = [
  {
    label: "Email",
    value: "lucaknierim@icloud.com",
    href: "mailto:lucaknierim@icloud.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "lucak0909",
    href: "https://github.com/lucak0909",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Luca Knierim",
    href: "https://www.linkedin.com/in/luca-knierim-082b62329/",
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-tl from-black via-zinc-900/20 to-black px-6 py-24 sm:px-12">
      {/* Back nav */}
      <div className="animate-fade-in mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      <h1 className="fade-in-delay-3 mx-auto mt-8 w-full max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Contact
      </h1>

      {/* Divider */}
      <div className="fade-in-delay-4 mx-auto mt-4 h-px w-full max-w-2xl bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0" />

      {/* Contact cards */}
      <div className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-4">
        {contacts.map((contact, i) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.label !== "Email" ? "_blank" : undefined}
            rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
            style={{
              opacity: 0,
              animation: `fade-in 1s ease forwards`,
              animationDelay: `${300 + i * 100}ms`,
            }}
          >
            <contact.icon
              size={20}
              className="shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-white"
            />
            <div>
              <p className="text-xs text-zinc-500">{contact.label}</p>
              <p className="text-sm text-zinc-300 group-hover:text-white">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
