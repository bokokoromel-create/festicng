"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/constants";
import { IconZoomIn } from "@/components/icons";
import Lightbox from "@/components/Lightbox";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="px-6 py-20 md:px-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[3px]" style={{ color: "var(--accent)" }}>Gallery</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Pictures</h2>
            <p className="mx-auto mt-3 max-w-md text-base" style={{ color: "var(--text-secondary)" }}>Check out all the action from our shows!</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {GALLERY.map((src, i) => (
              <button key={i} onClick={() => setLightboxIndex(i)} className="group relative aspect-square overflow-hidden text-left" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
                <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <IconZoomIn />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </>
  );
}
