import Image from "next/image";
import { IMG_PERFORMANCE } from "@/lib/constants";

export default function PerformanceBanner() {
  return (
    <section className="relative h-[65vh] overflow-hidden">
      <Image src={IMG_PERFORMANCE} alt="FUNKIPHINO live" fill className="object-cover" unoptimized />
      <div className="absolute inset-0" style={{ background: "var(--bg-overlay)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            Feel the <span className="font-['Dancing_Script']">Energy</span>
          </h2>
          <p className="mt-3 max-w-md text-lg text-white/80">
            From intimate venues to massive festival stages, we bring the funk wherever we go.
          </p>
        </div>
      </div>
    </section>
  );
}
