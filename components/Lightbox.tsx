import Image from "next/image";
import { IconClose, IconChevronLeft, IconChevronRight } from "@/components/icons";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
};

export default function Lightbox({ images, index, onClose, onChangeIndex }: Props) {
  const prev = () => onChangeIndex(index > 0 ? index - 1 : images.length - 1);
  const next = () => onChangeIndex(index < images.length - 1 ? index + 1 : 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={onClose}>
      <button onClick={onClose} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
        <IconClose size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
        <IconChevronLeft />
      </button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
        <IconChevronRight />
      </button>
      <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <Image src={images[index]} alt={`Photo ${index + 1}`} fill className="object-contain" unoptimized />
      </div>
      <p className="absolute bottom-6 text-sm font-medium text-white/60">{index + 1} / {images.length}</p>
    </div>
  );
}
