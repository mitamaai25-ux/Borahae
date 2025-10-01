import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_URL = "http://localhost:5000/api/bts";

export default function BorahaeBTSPage() {
  const [members, setMembers] = useState([]);
  const [discography, setDiscography] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [lyrics, setLyrics] = useState([]);
  const [page, setPage] = useState("home");

  useEffect(() => {
    fetch(`${API_URL}/members`).then(res => res.json()).then(setMembers);
    fetch(`${API_URL}/discography`).then(res => res.json()).then(setDiscography);
    fetch(`${API_URL}/timeline`).then(res => res.json()).then(setTimeline);
    fetch(`${API_URL}/lyrics`).then(res => res.json()).then(setLyrics);
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans">
      {/* Animated Purple Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(270deg,#2b002f,#4b0082,#8b00ff)",
          backgroundSize: "200% 200%"
        }}
      />
      <div className="relative z-10">
        <nav className="flex justify-between p-4 bg-purple-900/80">
          <h1 className="text-xl font-bold">💜 Borahae BTS</h1>
          <div className="flex gap-3">
            {["home", "discography", "timeline", "lyrics"].map(key => (
              <button key={key} onClick={() => setPage(key)}
                className={`px-3 py-1 rounded ${page === key ? "bg-white/20" : "bg-white/10"}`}>
                {key}
              </button>
            ))}
          </div>
        </nav>

        {page === "home" && (
          <section className="p-8">
            <h2 className="text-3xl font-bold">Welcome to Borahae 💜</h2>
            <p className="mt-3 opacity-80">ARMY hub with members, music, timeline, and lyrical snippets served by our AI-powered backend.</p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {members.map((m, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-white/10">
                  <h3 className="font-semibold">{m.stage}</h3>
                  <p>{m.full}</p>
                  <p className="opacity-70 text-sm">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {page === "discography" && (
          <section className="p-8">
            <h2 className="text-2xl font-bold">Discography</h2>
            {discography.map((d, i) => (
              <motion.div key={i} className="p-3 mt-3 bg-white/10 rounded-md"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex justify-between">
                  <span>{d.title}</span>
                  <span className="opacity-70">{d.year}</span>
                </div>
                <div className="text-sm opacity-80">{d.notes}</div>
              </motion.div>
            ))}
          </section>
        )}

        {page === "timeline" && (
          <section className="p-8">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <ul className="mt-4 space-y-3">
              {timeline.map((t, i) => (
                <motion.li key={i} className="border-l pl-4"
                  initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <span className="text-sm opacity-70">{t.date}</span>
                  <div>{t.event}</div>
                </motion.li>
              ))}
            </ul>
          </section>
        )}

        {page === "lyrics" && (
          <section className="p-8">
            <h2 className="text-2xl font-bold">Lyrics</h2>
            {lyrics.map((l, i) => (
              <motion.div key={i} className="p-3 mt-3 bg-white/10 rounded-md"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="font-semibold">{l.title}</div>
                <p className="opacity-80">{l.excerpt}</p>
              </motion.div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
