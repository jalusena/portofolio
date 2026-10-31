import SideNav from "@/components/SideNav";
import Reveal from "@/components/Reveal";
import ProfilePhoto from "@/components/ProfilePhoto";
import Gallery from "@/components/Gallery";
import ProjectCard from "@/components/ProjectCard";
import {
  profile,
  skills,
  education,
  organisations,
  achievements,
  trainings,
  certifications,
  projects,
} from "@/data/portfolio";

const CV = "/files/CV_Jalu_Sena_Purwa_Andhika.pdf";
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
const WA = `https://wa.me/${profile.whatsapp}`;

const btn =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-brand">
      {children}
    </svg>
  );
}

function Section({
  id,
  title,
  desc,
  tint,
  children,
}: {
  id: string;
  title: string;
  desc?: string;
  tint?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-20 ${tint ? "bg-sky/60" : ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {desc && <p className="mt-3 max-w-2xl leading-relaxed text-muted">{desc}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="h-full rounded-3xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand/10">
      <h3 className="mb-6 text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
}

type Item = { title: string; place?: string; date?: string; note?: string };

function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="stagger space-y-7 border-l-2 border-line pl-6">
      {items.map((it, n) => (
        <li key={it.title} className="relative" style={i(n)}>
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-white" />
          {it.date && (
            <span className="inline-block rounded-full bg-sky px-3 py-0.5 text-xs font-semibold text-brand-dark">
              {it.date}
            </span>
          )}
          <h4 className="mt-1.5 font-semibold leading-snug">{it.title}</h4>
          {it.place && <p className="text-sm text-muted">{it.place}</p>}
          {it.note && <p className="mt-1.5 text-sm leading-relaxed text-navy/80">{it.note}</p>}
        </li>
      ))}
    </ol>
  );
}

function List({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="stagger space-y-3">
      {items.map((it, n) => (
        <li key={it.title} style={i(n)} className="rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-brand">
          <p className="font-semibold">{it.title}</p>
          <p className="mt-0.5 text-sm text-muted">{it.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <SideNav />
      <div className="lg:pl-24">
        <main>
          {/* Beranda */}
          <section id="beranda" className="bg-[radial-gradient(circle_at_12%_8%,#dcedf8,transparent_45%)] pb-24 pt-16 lg:pt-24">
            <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 md:grid-cols-[0.85fr_1.15fr]">
              <div className="anim-pop relative mx-auto w-full max-w-sm" style={d(100)}>
                <div aria-hidden className="drift absolute -inset-4 rounded-[2.5rem] bg-[conic-gradient(from_0deg,#1f7bb8,#9fd3f0,#e8f4fb,#1f7bb8)] opacity-50 blur-2xl" />
                <ProfilePhoto alt={`Foto profil ${profile.name}`} />
                {/*<div className="float absolute -bottom-5 -left-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg shadow-brand/15">
                  <p className="text-2xl font-bold leading-none text-brand-dark">5+ tahun</p>
                  <p className="mt-1 text-xs text-muted">aktif berorganisasi</p>
                </div>*/}
                <div className="float-slow absolute -right-3 top-8 flex items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-2.5 shadow-lg shadow-brand/15">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="ping-dot absolute inset-0 rounded-full bg-emerald-400" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold">Siap ditempatkan</span>
                </div>
              </div>

              <div>
                <span className="anim-up inline-block rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-brand-dark" style={d(200)}>
                  {profile.status}
                </span>
                <h1 className="anim-up mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl" style={d(320)}>
                  Halo, saya {profile.name}
                </h1>
                <p className="anim-up mt-5 max-w-xl text-lg leading-relaxed text-muted" style={d(440)}>
                  {profile.intro}
                </p>
                <div className="anim-up mt-7 flex flex-wrap gap-3" style={d(560)}>
                  <a href="#kontak" className={`${btn} bg-brand text-white hover:bg-brand-dark`}>Hubungi saya</a>
                  <a href={CV} download className={`${btn} border border-brand text-brand-dark hover:bg-sky`}>Unduh CV</a>
                </div>
                <ul className="anim-up mt-8 space-y-2 text-sm text-muted" style={d(680)}>
                  <li className="flex items-center gap-2.5">
                    <Icon><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Icon>
                    {profile.location}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
                    {profile.email}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Icon><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></Icon>
                    {profile.phone}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tentang */}
          <Section id="tentang" title="Tentang saya">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <Reveal>
                <p className="leading-relaxed text-muted">{profile.about}</p>
                <a href={CV} download className={`${btn} mt-7 bg-brand text-white hover:bg-brand-dark`}>Unduh CV</a>
              </Reveal>
              <Reveal delay={150}>
                <div className="rounded-3xl border border-line bg-white p-8">
                  <h3 className="text-xl font-bold">Keahlian</h3>
                  <ul className="stagger mt-5 flex flex-wrap gap-2.5">
                    {skills.map((s, n) => (
                      <li key={s} style={i(n)} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-brand-dark transition-all hover:-translate-y-0.5 hover:border-brand">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Section>

          {/* Pengalaman */}
          <Section id="pengalaman" title="Pendidikan dan pengalaman organisasi" desc="Latar belakang pendidikan dan peran saya di organisasi kampus maupun komunitas." tint>
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              <Reveal><Panel title="Pendidikan"><Timeline items={education} /></Panel></Reveal>
              <Reveal delay={150}><Panel title="Pengalaman organisasi"><Timeline items={organisations} /></Panel></Reveal>
            </div>
          </Section>

          {/* Proyek */}
          <Section id="proyek" title="Proyek" desc="Proyek yang pernah saya kerjakan. Klik kartu untuk membuka proyeknya.">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p, n) => (
                <Reveal key={p.title} delay={n * 150} className="h-full">
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </Section>

          {/* Prestasi */}
          <Section id="prestasi" title="Prestasi" desc="Pencapaian di bidang kewirausahaan selama masa studi." tint>
            <div className="grid gap-5 sm:grid-cols-2">
              {achievements.map((a, n) => (
                <Reveal key={a.title} delay={n * 150}>
                  <div className="flex h-full gap-5 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-sky text-brand-dark">
                      <span className="text-xs font-semibold leading-none">Juara</span>
                      <span className="mt-1 text-3xl font-bold leading-none">{a.rank}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{a.title}</h3>
                      <p className="mt-1 text-sm text-muted">{a.event}</p>
                      <p className="text-sm font-medium text-brand-dark">{a.level}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          {/* Pelatihan dan sertifikasi */}
          <Section id="pelatihan" title="Pelatihan dan sertifikasi" desc="Upaya saya menjaga kompetensi tetap relevan.">
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              <Reveal><Panel title="Pelatihan"><List items={trainings} /></Panel></Reveal>
              <Reveal delay={150}><Panel title="Sertifikasi"><List items={certifications} /></Panel></Reveal>
            </div>
          </Section>

          {/* Dokumentasi */}
          <Section id="dokumentasi" title="Dokumentasi" desc="Foto kegiatan organisasi, prestasi, pelatihan, dan sertifikasi." tint>
            <Gallery />
          </Section>

          {/* Kontak */}
          <section id="kontak" className="pb-12 pt-4">
            <div className="mx-auto max-w-5xl px-6">
              <Reveal>
                <div className="flex flex-col gap-8 rounded-3xl bg-navy p-10 text-white md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">Terbuka untuk kesempatan kerja</h2>
                    <p className="mt-3 max-w-md leading-relaxed text-white/75">
                      Hubungi saya lewat email atau WhatsApp.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <a href={GMAIL} target="_blank" rel="noopener noreferrer" className={`${btn} bg-white text-navy hover:bg-sky`}>Kirim email</a>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/40 text-white hover:bg-white/10`}>WhatsApp</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t border-line py-8 pb-28 text-center text-sm text-muted lg:pb-8">
          {profile.name}, 2026
        </footer>
      </div>
    </>
  );
}
