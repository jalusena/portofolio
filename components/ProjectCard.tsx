"use client";

import { useState } from "react";

type Project = {
  title: string;
  type: string;
  desc: string;
  tags: string[];
  link: string;
  linkLabel: string;
  image: string;
  preview?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  const [src, setSrc] = useState(p.image);
  const [failed, setFailed] = useState(false);

  // Urutan: foto lokal, lalu gambar cadangan dari tautan, lalu tampilan kosong.
  const onError = () => {
    if (p.preview && src !== p.preview) setSrc(p.preview);
    else setFailed(true);
  };

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky to-[#b9dcf2]">
        {failed ? (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-brand-dark/70">
            Gambar proyek belum ditambahkan
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`Tampilan proyek ${p.title}`}
            loading="lazy"
            onError={onError}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">
          {p.type}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-brand-dark">
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark">
          {p.linkLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}
