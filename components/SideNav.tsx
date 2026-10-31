"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = { id: string; label: string; icon: React.ReactNode };

const icons = {
  beranda: <><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></>,
  tentang: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  pengalaman: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  proyek: <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  prestasi: <><path d="M8 4h8v6a4 4 0 0 1-8 0V4z" /><path d="M8 6H4a3 3 0 0 0 4 4M16 6h4a3 3 0 0 1-4 4M12 14v4M8 21h8" /></>,
  pelatihan: <><circle cx="12" cy="9" r="5" /><path d="M9 13.5L7 21l5-3 5 3-2-7.5" /></>,
  dokumentasi: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 16l-5-5-9 9" /></>,
  kontak: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
};

const make = (id: keyof typeof icons, label: string): NavItem => ({ id, label, icon: icons[id] });

const desktop = [
  make("beranda", "Beranda"),
  make("tentang", "Tentang"),
  make("pengalaman", "Pengalaman"),
  make("proyek", "Proyek"),
  make("prestasi", "Prestasi"),
  make("pelatihan", "Pelatihan"),
  make("dokumentasi", "Dokumentasi"),
  make("kontak", "Kontak"),
];

// Di HP hanya 5 menu agar muat. Proyek, Prestasi, dan Pelatihan ikut menyala di "Pengalaman".
const mobile = [
  make("beranda", "Beranda"),
  make("tentang", "Tentang"),
  make("pengalaman", "Karier"),
  make("dokumentasi", "Foto"),
  make("kontak", "Kontak"),
];
const mobileGroup: Record<string, string> = { proyek: "pengalaman", prestasi: "pengalaman", pelatihan: "pengalaman" };

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function SideNav() {
  const [active, setActive] = useState("beranda");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    desktop.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const index = Math.max(0, desktop.findIndex((i) => i.id === active));
  const mobileActive = mobileGroup[active] ?? active;

  return (
    <>
      {/* Garis progres scroll */}
      <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-brand" />
      </div>

      {/* Desktop: dock vertikal melayang di tepi kiri */}
      <nav aria-label="Navigasi utama" className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-3xl border border-line bg-white/80 p-2 shadow-xl shadow-brand/10 backdrop-blur-md lg:flex">
        <a href="#beranda" aria-label="Ke atas" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-sm font-bold text-white transition-transform hover:scale-105">
          JS
        </a>
        <span aria-hidden className="h-px w-8 bg-line" />
        <ul className="relative flex flex-col gap-1">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-12 w-12 rounded-2xl bg-brand shadow-lg shadow-brand/30 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ transform: `translateY(${index * 52}px)` }}
          />
          {desktop.map((item) => (
            <li key={item.id} className="group relative">
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${
                  active === item.id ? "text-white" : "text-muted hover:text-brand-dark"
                }`}
              >
                <Svg>{item.icon}</Svg>
              </a>
              <span className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-x-2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* HP: dock melayang di bawah, menu aktif membuka label */}
      <nav aria-label="Navigasi utama" className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex items-center justify-between rounded-2xl border border-line bg-white/90 p-1.5 shadow-xl shadow-brand/15 backdrop-blur-md lg:hidden">
        {mobile.map((item) => {
          const on = mobileActive === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={on ? "true" : undefined}
              className={`flex items-center rounded-xl p-3 transition-all duration-300 ${
                on ? "bg-brand text-white shadow-md shadow-brand/30" : "text-muted"
              }`}
            >
              <Svg>{item.icon}</Svg>
              <span className={`overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ${on ? "ml-2 max-w-24 opacity-100" : "ml-0 max-w-0 opacity-0"}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
