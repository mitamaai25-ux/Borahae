import React from "react";
import { motion } from "framer-motion";

// BorahaeBTSPage.jsx with Animated Gradient Background

const BTS_INFO = {
  name: "BTS (방탄소년단 / Beyond The Scene)",
  origin: "Seoul, South Korea",
  formed: "2013",
  debut: "June 13, 2013",
  label: "Big Hit / HYBE",
  members: [
    { stage: "RM", full: "Kim Nam-joon", role: "Leader / Rapper" },
    { stage: "Jin", full: "Kim Seok-jin", role: "Vocalist" },
    { stage: "SUGA", full: "Min Yoon-gi", role: "Rapper" },
    { stage: "j-hope", full: "Jung Ho-seok", role: "Rapper / Dancer" },
    { stage: "Jimin", full: "Park Ji-min", role: "Vocalist / Dancer" },
    { stage: "V", full: "Kim Tae-hyung", role: "Vocalist" },
    { stage: "Jungkook", full: "Jeon Jung-kook", role: "Main Vocalist" }
  ],
  short_bio:
    "BTS is a South Korean boy band known for blending pop, hip-hop and R&B, and for their global impact through music, storytelling, and fan engagement (ARMY).",
  discography: [
    { year: 2013, title: "2 Cool 4 Skool (Debut Single Album)", notes: "Debut era" },
    { year: 2014, title: "Dark & Wild", notes: "First studio album" },
    { year: 2016, title: "Wings", notes: "Breakthrough album" },
    { year: 2018, title: "Love Yourself: Tear", notes: "Global chart success" },
    { year: 2020, title: "Map of the Soul: 7", notes: "Career-spanning album" }
  ],
  timeline: [
    { date: "2013-06-13", event: "Official Debut - 'No More Dream'" },
    { date: "2015-05-02", event: "First world tour begins" },
    { date: "2018-08-24", event: "First Billboard Hot 100 #1 (Fake Love)" },
    { date: "2020-02-21", event: "'Map of the Soul: 7' released" }
  ],
  lyricsExcerpts: [
    { title: "Spring Day", excerpt: "...I miss you, saying this makes me cry..." },
    { title: "Magic Shop", excerpt: "...If you open the door, I’ll be your light..." }
  ],
};

const GALLERY_DEFAULT = [
  "/images/bts_official_1.jpg",
  "/images/bts_official_2.jpg",
  "/images/bts_official_3.jpg"
];

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString();
  } catch (e) {
    return d;
  }
}

function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-800"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Nav({ page, setPage }) {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 text-white shadow-lg relative z-20">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-extrabold">Borahae</div>
        <div className="text-sm opacity-80">BTS Fanspace</div>
      </div>
      <div className="flex gap-3">
        {["home","discography","timeline","lyrics","gallery"].map((key) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`px-3 py-1 rounded-md text-sm ${page === key ? "bg-white/20" : "bg-white/5"}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Hero({ setPage }) {
  return (
    <header className="text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Borahae — BTS AI Fanspace</h1>
          <p className="mt-4 text-lg opacity-90">An AI-assisted fan hub: discography, timeline, lyrics excerpts, and an official-photo gallery. Animated ARMY purple theme background.</p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => setPage("discography")} className="px-4 py-2 bg-white/20 rounded-md">Explore Discography</button>
            <button onClick={() => setPage("gallery")} className="px-4 py-2 bg-white text-purple-900 rounded-md font-semibold">Open Gallery</button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function MemberGrid() {
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-white/90 mb-4">Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BTS_INFO.members.map((m) => (
          <motion.div key={m.stage} className="p-4 rounded-xl bg-white/6 border border-white/8" whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg font-semibold text-white">{m.stage}</h3>
            <p className="opacity-90">{m.full}</p>
            <p className="mt-2 text-sm opacity-80">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Discography() {
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-white/90">Discography</h2>
      <div className="mt-6 space-y-3">
        {BTS_INFO.discography.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="p-4 rounded-lg bg-white/6 border border-white/8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-white">{d.title}</div>
                <div className="text-sm opacity-80">{d.notes}</div>
              </div>
              <div className="text-sm opacity-80">{d.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-white/90">Timeline</h2>
      <div className="mt-6 border-l border-white/10 pl-6">
        {BTS_INFO.timeline.map((t, i) => (
          <motion.div key={i} className="mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
            <div className="text-sm opacity-80">{formatDate(t.date)}</div>
            <div className="mt-1 text-white">{t.event}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Lyrics() {
  const [query, setQuery] = React.useState("");
  const results = BTS_INFO.lyricsExcerpts.filter((l) => l.title.toLowerCase().includes(query.toLowerCase()) || l.excerpt.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-white/90">Lyrics & Excerpts</h2>
      <div className="mt-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title or excerpt..." className="w-full p-3 rounded-md bg-white/6 border border-white/8" />
        <div className="mt-4 space-y-3">
          {results.map((r, i) => (
            <motion.div key={i} className="p-4 rounded-md bg-white/6 border border-white/8">
              <div className="font-semibold text-white">{r.title}</div>
              <div className="mt-2 opacity-80">{r.excerpt}</div>
            </motion.div>
          ))}
          {results.length === 0 && <div className="mt-4 opacity-70">No excerpts match your search.</div>}
        </div>
      </div>
    </section>
  );
}

function Gallery({ gallery, setGallery }) {
  const onUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setGallery((g) => [...urls, ...g]);
  };
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-white/90">Official Photo Gallery</h2>
      <div className="mt-4 flex gap-3">
        <label className="px-3 py-2 rounded-md bg-white/10 cursor-pointer">
          Upload Photos
          <input type="file" accept="image/*" multiple onChange={onUpload} className="hidden" />
        </label>
        <button onClick={() => setGallery(GALLERY_DEFAULT)} className="px-3 py-2 rounded-md bg-white/5">Reset to placeholders</button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {gallery.map((src, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden bg-white/5">
            <img src={src} alt={`BTS ${i + 1}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function BorahaeBTSPage() {
  const [page, setPage] = React.useState("home");
  const [gallery, setGallery] = React.useState(GALLERY_DEFAULT);
  return (
    <AnimatedBackground>
      <Nav page={page} setPage={setPage} />
      <Hero setPage={setPage} />
      <MemberGrid />
      <main>
        {page === "home" && (
          <section className="container mx-auto px-6 py-8">
            <h2 className="text-2xl font-bold">Welcome to Borahae — BTS AI Fanspace</h2>
            <p className="mt-2 opacity-80">Use the navigation to explore discography, timeline, lyrics excerpts, and an official-photo gallery.</p>
          </section>
        )}
        {page === "discography" && <Discography />}
        {page === "timeline" && <Timeline />}
        {page === "lyrics" && <Lyrics />}
        {page === "gallery" && <Gallery gallery={gallery} setGallery={setGallery} />}
      </main>
      <footer className="py-6 text-center text-sm text-white/60">Built with 💜 for ARMY — Borahae.</footer>
    </AnimatedBackground>
  );
}
