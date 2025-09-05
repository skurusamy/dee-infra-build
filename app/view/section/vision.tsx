"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const WRAP = "mr-auto w-full max-w-[1400px] pl-4 sm:pl-8 lg:pl-24 pr-4";

export default function Vision() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setStarted(true);
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    // stacking context for the background
    <section className="relative py-16 overflow-hidden">
      {/* Background image */}
      <Image
        src="/project-bg.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none select-none object-cover md:object-center opacity-10"
        priority={false}
      />

      {/* subtle fade so text stays readable */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />

      <div className={WRAP}>
        <h2 className="text-center text-3xl md:text-6xl font-black tracking-tight leading-tight text-sky-700 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.18)] mb-3">
          SEE OUR VISION COME TO LIFE
        </h2>

        {/* fix invalid class: use text-gray-700 instead of text-black-1000 */}
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-10">
          We transform ambitious ideas into tangible realities. Watch our story to
          understand the passion and precision behind every project.
        </p>

        {/* Video card */}
        <div className="rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              src="/vision.mp4"
              poster="/vision.jpg"
              className="h-full w-full object-cover"
              preload="metadata"
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              controls={started}   // show native controls after first click
            />
            {/* Center play button (hidden when playing) */}
            {!playing && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={started ? "Play video" : "Start video"}
                className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 text-sky-700 text-2xl flex items-center justify-center hover:bg-white transition"
              >
                ▶
              </button>
            )}
            {/* Click anywhere to toggle (kept underneath button) */}
            <button
              type="button"
              aria-label="Toggle video play"
              className="absolute inset-0"
              onClick={togglePlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
