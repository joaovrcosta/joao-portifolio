"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import SideRays from "./SideRays";

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

function ExperienceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <SideRays
        origin="top-left"
        rayColor1="#004E63"
        rayColor2="#00C8FF"
        speed={1.8}
        intensity={1.2}
        spread={2.8}
        saturation={1.3}
        blend={0.65}
        falloff={2.4}
        opacity={0.7}
        fadeInDuration={1400}
        className="absolute inset-0 z-0 md:hidden"
      />
      <SideRays
        origin="top-right"
        rayColor1="#004E63"
        rayColor2="#00C8FF"
        speed={2}
        intensity={1.6}
        spread={2.2}
        saturation={1.4}
        blend={0.7}
        falloff={2.2}
        opacity={0.85}
        fadeInDuration={1400}
        className="absolute inset-0 z-0 hidden md:block"
      />
      <div className="absolute inset-0 z-0 bg-[#070707]/65 md:bg-[#070707]/50" />
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
      className="border-t border-white/15 py-8 md:py-14"
    >
      <div className="flex gap-4 md:gap-10">
        <span className="shrink-0 pt-0.5 text-xs font-light tabular-nums text-white/45 md:pt-1 md:text-base">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex flex-col gap-3 md:gap-4">
          <div className="space-y-2">
            <p className="text-[11px] font-light uppercase leading-relaxed tracking-[0.1em] text-[#86858B] md:text-sm md:tracking-[0.14em]">
              {experience.company} — {experience.location}
            </p>
            <div className="space-y-1.5 md:space-y-0">
              <p
                className={`${instrumentSerif.className} text-xl leading-snug text-[#00C8FF] md:text-3xl`}
              >
                {experience.period}
              </p>
              <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-medium leading-snug text-white md:text-3xl md:leading-tight">
                <span className="hidden text-white/35 md:inline">&gt;</span>
                <span>{experience.role}</span>
                {experience.current && (
                  <span className="inline-block rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#00C8FF]">
                    Current
                  </span>
                )}
              </h3>
            </div>
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
      className="relative isolate bg-[#070707] px-5 py-16 sm:px-[6vw] md:py-32"
    >
      <ExperienceBackground />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-start gap-8 md:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:z-10 lg:h-fit lg:self-start">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#86858B] md:mb-4">
            Career
          </p>
          <h2 className="font-poppins text-[clamp(2.75rem,14vw,5rem)] font-medium leading-[0.95] tracking-tight text-white lg:text-[80px]">
            Experiences
          </h2>
        </div>

        <div className="min-w-0">
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
