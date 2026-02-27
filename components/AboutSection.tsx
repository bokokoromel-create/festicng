import Image from "next/image";
import { IMG_ABOUT } from "@/lib/constants";
import { IconStarFilled } from "@/components/icons";

type Props = {
  onScrollTo: (id: string) => void;
};

export default function AboutSection({ onScrollTo }: Props) {
  return (
    <section id="about" className="px-6 py-20 md:px-16" style={{ background: "var(--bg-primary)" }}>
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px]" style={{ color: "var(--accent)" }}>About the band</p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Get Ready to <span style={{ color: "var(--accent)" }}>FUNK!</span>
          </h2>
          <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Whether performing for the <strong style={{ color: "var(--text-primary)" }}>President of the United States</strong> in Washington, DC, for major sports franchises, VIP parties catering to Hollywood elite, or for socialite brides across the country, Funkiphino has the energy and talent to bring a party to life.
          </p>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            The 13 members of the high-energy funk band infuse explosive horn lines, old-school Hammond organ sounds, and pumpin&apos; bass with intoxicating vocal harmonies.
          </p>

          <div className="mb-8 flex gap-8">
            <StatBlock value="13" label="Members" />
            <StatBlock value="500+" label="Shows" />
            <StatBlock value="10+" label="Years" />
          </div>

          <button onClick={() => onScrollTo("contact")} className="inline-flex rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105" style={{ background: "var(--accent)", boxShadow: "var(--shadow-pill)" }}>
            Book Us Now
          </button>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)" }}>
            <Image src={IMG_ABOUT} alt="FUNKIPHINO band" fill className="object-cover" unoptimized />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl p-4" style={{ background: "var(--accent)", boxShadow: "var(--shadow-md)" }}>
            <p className="text-2xl font-extrabold text-white">4.9</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <IconStarFilled key={i} size={12} />)}
            </div>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold" style={{ color: "var(--accent)" }}>{value}</p>
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}
