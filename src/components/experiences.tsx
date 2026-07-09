"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const experiences = [
  {
    company: "Magma3",
    location: "São Paulo - (Remote)",
    period: "May/2025 – Present",
    role: "Front-end Developer",
    description:
      "Responsible for developing and maintaining the asset management dashboard. Working with C# and .NET on the backend, MongoDB, AWS, and React on the front-end to deliver robust, scalable interfaces.",
    current: true,
  },
  {
    company: "Arke",
    location: "Atlanta, Georgia (Remote)",
    period: "Jun/2025",
    role: "Front-end Engineer",
    description:
      "Worked on the Wills Group digital platform, contributing to planning, architecture, and implementation using React and Next.js, with a focus on performance and user experience.",
  },
  {
    company: "Pippa Tech",
    location: "São Paulo (On-site)",
    period: "Aug/2024 – May/2025",
    role: "Front-end Developer",
    description:
      "Built solutions across multiple business domains, including admin dashboards with real-time financial data using React and Firebase.",
  },
  {
    company: "Converte.me",
    location: "Remote",
    period: "May/2023 – Jul/2024",
    role: "Front-end Engineer",
    description:
      "Created conversion-focused digital experiences with React, Next.js, and API integrations, prioritizing performance, SEO, and high-converting user flows.",
  },
  {
    company: "Activision",
    location: "Santa Monica, California (Remote)",
    period: "Aug/2023 – Jan/2024",
    role: "Front End Engineer (Contract)",
    description:
      "Developed the interactive teaser The Truth Lies for Call of Duty: Black Ops 6, combining 90s aesthetics, immersive storytelling, and animations with React and Three.js.",
  },
  {
    company: "ProIoT",
    location: "Remote",
    period: "Sep/2022 – May/2023",
    role: "Full Stack Engineer",
    description:
      "Full-stack work on IoT solutions, building interfaces, APIs, and integrations with React, Node.js, and TypeScript for connected products in production.",
  },
  {
    company: "Mercado Livre",
    location: "Remote",
    period: "May/2022 – Sep/2022",
    role: "Software Engineer",
    description:
      "Contributed to large-scale software development, focusing on code quality, agile squad collaboration, and feature delivery in high-demand environments.",
  },
  {
    company: "Mercado Livre",
    location: "Remote",
    period: "Mar/2020 – Abr/2022",
    role: "Intern",
    description:
      "Key Responsibilities: Analyze and integrate Mercado Pago and Mercado Livre APIs into new and existing client sites. Develop tests, implement new integrations, and manage checkouts, sales flows, fees, and error prevention. Conduct daily front-end and back-end analysis, quickly identifying and resolving integration issues to ensure platform stability and reliability.",
  },
  {
    company: "Fatec Itaquera University",
    location: "Remote",
    period: "May/2019 – Mar/2020",
    role: "Software Developer",
    description:
      " I developed the website for Fatec Itaquera (a public college in São Paulo),working on requirements definition and leading the migration of the entire source code to a new technology stack."
  },
  {
    company: "Fiverr",
    location: "Remote",
    period: "Feb/2017 – May/2019",
    role: "Freelancer Developer",
    description:
      "At the beginning of my career, I worked as a freelance developer on Fiverr to gain experience. I specialized in creating landing pages, small e-commerce websites, local shop websites, and administrative systems. My responsibilities included utilizing React for building dynamic user interfaces and Node.js for creating scalable systems"
  },
];

function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="experiences-aurora-blob experiences-aurora-blob-1" />
      <div className="experiences-aurora-blob experiences-aurora-blob-2" />
      <div className="experiences-aurora-blob experiences-aurora-blob-3" />
      <div className="absolute inset-0 bg-[#070707]/55 backdrop-blur-[1px]" />
    </div>
  );
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/15 py-10 md:py-14"
    >
      <div className="flex gap-6 md:gap-10">
        <span className="shrink-0 pt-1 text-sm font-light tabular-nums text-white/45 md:text-base">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="text-xs font-light uppercase tracking-[0.14em] text-[#86858B] md:text-sm">
              {experience.company} — {experience.location}
            </p>
            <h3 className="text-2xl font-medium leading-tight text-white md:text-3xl">
              <span className={`${instrumentSerif.className} text-[#00C8FF]`}>
                {experience.period}
              </span>
              <span className="mx-2 text-white/35">&gt;</span>
              {experience.role}
              {experience.current && (
                <span className="ml-3 inline-block rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#00C8FF] align-middle">
                  Current
                </span>
              )}
            </h3>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-[#b6b6b6] md:text-base md:leading-[1.7]">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experiences() {
  return (
    <section
      id="experience"
      data-header-theme="dark"
      className="relative bg-[#070707] px-[6vw] py-24 md:py-32"
    >
      <AuroraBackground />

      <div className="relative mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="sticky top-28 z-10 self-start">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#86858B]">
            Career
          </p>
          <h2 className="font-poppins text-[80px] font-medium leading-[0.95] tracking-tight text-white">
            Experiences
          </h2>
        </div>

        <div>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
          <div className="border-t border-white/15" aria-hidden />
        </div>
      </div>
    </section>
  );
}
