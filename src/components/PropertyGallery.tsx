import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt?: string;
}

interface Props {
  images?: GalleryImage[];
  placeholderCount?: number;
  label?: string;
}

export function PropertyGallery({ images = [], placeholderCount = 6, label = "Gallery" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const safeImages = useMemo(
    () => images.filter((img) => img?.src && !failedImages[img.src]),
    [failedImages, images],
  );
  const has = safeImages.length > 0;
  const slots = has ? safeImages : [];

  useEffect(() => {
    if (!has) {
      setOpen(null);
      setActive(0);
      return;
    }

    setActive((current) => Math.min(current, safeImages.length - 1));
    setOpen((current) => (current === null ? null : Math.min(current, safeImages.length - 1)));
  }, [has, safeImages.length]);

  // Autoplay slider
  useEffect(() => {
    if (!has || open !== null) return;
    const id = setInterval(() => setActive((a) => (a + 1) % safeImages.length), 5000);
    return () => clearInterval(id);
  }, [has, safeImages.length, open]);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (open === null || !has) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % safeImages.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + safeImages.length) % safeImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, has, safeImages.length]);

  if (!has) return null;

  return (
    <div className="space-y-4">
      {has && (
        <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[oklch(0.14_0.008_60)] shadow-elegant">
          {safeImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt ?? `${label} ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 z-10 h-full w-full cursor-zoom-in object-contain p-3 transition-all duration-1000 ease-out sm:p-5 ${
                i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onClick={() => setOpen(active)}
              onError={() => setFailedImages((current) => ({ ...current, [img.src]: true }))}
            />
          ))}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 blur-2xl transition-all duration-1000"
            style={{ backgroundImage: `url(${safeImages[active]?.src ?? ""})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%),linear-gradient(to_top,rgba(8,7,6,0.68),rgba(8,7,6,0.12)_50%,rgba(8,7,6,0.38))]" />
          {/* arrows */}
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + safeImages.length) % safeImages.length); }}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-black/40 text-ivory backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100 hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % safeImages.length); }}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-black/40 text-ivory backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100 hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          {/* dots / counter */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-gold" : "w-2 bg-ivory/40 hover:bg-ivory/70"
                }`}
              />
            ))}
          </div>
          <div className="absolute right-4 top-4 rounded-full border border-gold/40 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-luxury text-ivory backdrop-blur-md">
            {String(active + 1).padStart(2, "0")} / {String(safeImages.length).padStart(2, "0")}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {slots.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => { if (has) { setActive(i); setOpen(i); } }}
            className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border bg-background/40 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:shadow-gold ${
              has && i === active
                ? "border-gold shadow-gold"
                : "border-[color-mix(in_oklab,var(--gold)_20%,transparent)]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt ?? `${label} ${i + 1}`}
              loading="lazy"
              onError={() => setFailedImages((current) => ({ ...current, [img.src]: true }))}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {open !== null && has && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-ivory hover:text-gold"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-ivory hover:text-gold sm:left-10"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => (o! - 1 + images.length) % images.length); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={safeImages[open].src}
            alt={safeImages[open].alt ?? ""}
            className="relative z-10 max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-30 blur-3xl"
            style={{ background: `center / cover no-repeat url(${safeImages[open].src})` }}
          />
          <button
            aria-label="Next"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-ivory hover:text-gold sm:right-10"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => (o! + 1) % safeImages.length); }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
