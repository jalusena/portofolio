"use client";

import { useState } from "react";
import { gallery, type Category } from "@/data/portfolio";

const order: Category[] = ["Organisasi", "Prestasi", "Pelatihan", "Sertifikasi"];

export default function Gallery() {
  // Hanya kartu yang sudah punya foto yang ditampilkan.
  const items = gallery.filter((g) => g.images.length > 0);
  const filters = ["Semua", ...order.filter((c) => items.some((g) => g.category === c))];
  const [filter, setFilter] = useState("Semua");
  const shown = items.filter((g) => filter === "Semua" || g.category === filter);

  if (items.length === 0) {
    return <p className="text-muted">Dokumentasi akan segera ditambahkan.</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-muted hover:border-brand hover:text-brand-dark"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((g, n) => (
          <article
            key={`${filter}-${g.title}`}
            style={{ "--d": `${n * 70}ms` } as React.CSSProperties}
            className="anim-up overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10"
          >
            <div className="relative">
              <div className="flex aspect-[16/10] snap-x snap-mandatory overflow-x-auto bg-sky [scrollbar-width:thin]">
                {g.images.map((file, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={file}
                    src={`/images/${file}`}
                    alt={`${g.title}, foto ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full shrink-0 snap-start object-cover"
                    onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                  />
                ))}
              </div>
              {g.images.length > 1 && (
                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-navy/70 px-2.5 py-1 text-xs font-medium text-white">
                  {g.images.length} foto, geser
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-brand">{g.category}</p>
              <h3 className="mt-1 font-semibold">{g.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{g.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
