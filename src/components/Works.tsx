import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import { RevealText, RevealWrapper } from "./Reveal";

function ProjectMeta({ project }: { project: Project }) {
  const metaItems = [
    project.type,
    project.location,
    project.year,
    project.category,
    project.area,
  ].filter((item): item is string => Boolean(item && item.length > 0));
  if (metaItems.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6">
      {metaItems.map((item) => (
        <span key={item} className="micro-caps text-warm-slate">
          {item}
        </span>
      ))}
    </div>
  );
}

type SizeKey = "xs" | "sm" | "md" | "mdTall" | "lg" | "xl";
type Orientation = "portrait" | "landscape";

const SIZE_HEIGHTS: Record<SizeKey, string> = {
  xs: "clamp(120px, 16vh, 200px)",
  sm: "clamp(180px, 24vh, 300px)",
  md: "clamp(240px, 34vh, 420px)",
  mdTall: "clamp(280px, 40vh, 480px)",
  lg: "clamp(320px, 52vh, 600px)",
  xl: "clamp(420px, 75vh, 820px)",
};

// Per-image size overrides — keys are image filenames (last path segment).
const IMAGE_SIZE_OVERRIDES: Record<string, SizeKey> = {
  "zoliborz_5.webp": "lg", // szerokie ujęcie — większe
  "zytnia_2.webp": "mdTall", // nieco wyższe
};

// Per-image orientation overrides (defaults to landscape). Keys are filenames.
const IMAGE_ORIENTATIONS: Record<string, Orientation> = {
  "zoliborz_6.webp": "portrait",
  "zoliborz_3.webp": "portrait",
  "zoliborz_4.webp": "portrait",
  "zytnia_3.webp": "portrait",
  "zytnia_4.webp": "portrait",
  "zytnia_5.webp": "portrait",
  "zytnia_6.webp": "portrait",
  "antoniewska_3.webp": "portrait",
};

function filenameOf(src: string): string {
  return src.split("/").pop() ?? "";
}

function sizeFor(src: string, fallback: SizeKey): SizeKey {
  return IMAGE_SIZE_OVERRIDES[filenameOf(src)] ?? fallback;
}

function orientationFor(src: string): Orientation {
  return IMAGE_ORIENTATIONS[filenameOf(src)] ?? "landscape";
}

function projectAlt(project: Project, view?: string) {
  const location = project.location ? `, ${project.location}` : "";
  const base = `Projekt wnętrz — ${project.title}${location}`;
  return view ? `${base} — ${view}` : base;
}

function GalleryImage({
  src,
  alt,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <RevealWrapper className={className} style={style}>
      <div className="reveal-inner w-full h-full project-card">
        <img
          className="w-full h-full object-cover"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </RevealWrapper>
  );
}

export function Works() {
  return (
    <section
      id="work"
      className="w-full max-w-screen-2xl mx-auto px-8 lg:px-16"
    >
      {/* Section Header */}
      <div className="relative mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="micro-caps text-warm-slate mb-4 block">
              01 / Realizacje
            </span>
            <RevealText>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                  lineHeight: 1.05,
                }}
              >
                Wybrane realizacje
              </h2>
            </RevealText>
          </div>
          <RevealText className="hidden md:block">
            <p className="micro-caps text-warm-slate max-w-xs leading-loose">
              Mieszkaniowe · Komercyjne · Zamówienia prywatne
            </p>
          </RevealText>
        </div>
      </div>

      <div className="space-y-20 lg:space-y-28">
        {projects.map((project, pIdx) => {
          const [featured, ...rest] = project.images;
          const flip = pIdx % 2 === 1;

          return (
            <div key={project.id} className="project-block">
              {/* Project meta (right-aligned) */}
              <div className="mb-8 flex md:justify-end">
                <RevealText>
                  <ProjectMeta project={project} />
                </RevealText>
              </div>

              {/* Single-image project (Antoniewska) */}
              {rest.length === 0 ? (
                <GalleryImage
                  src={featured}
                  alt={projectAlt(project, "widok główny")}
                  className="w-full"
                  style={{ height: SIZE_HEIGHTS[sizeFor(featured, "lg")] }}
                />
              ) : project.pairImage ? (
                /* Two-row layout: featured + pair in row 1 (same height), rest in row 2 */
                (() => {
                  const pair = project.pairImage;
                  const extraPair = project.extraPairImage;
                  const row2 = rest.filter(
                    (src) => src !== pair && src !== extraPair,
                  );
                  const featuredPortrait =
                    orientationFor(featured) === "portrait";
                  const hasExtraPair = Boolean(extraPair);
                  const featuredSpan = hasExtraPair
                    ? "lg:col-span-6"
                    : featuredPortrait
                      ? "lg:col-span-5"
                      : "lg:col-span-7";
                  const pairSpan = hasExtraPair
                    ? "lg:col-span-3"
                    : featuredPortrait
                      ? "lg:col-span-7"
                      : "lg:col-span-5";
                  const featuredSize: SizeKey = featuredPortrait ? "xl" : "lg";
                  return (
                    <div className="flex flex-col gap-4 lg:gap-6">
                      {/* Row 1: featured + pair — same height */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                        <GalleryImage
                          src={featured}
                          alt={projectAlt(project, "widok główny")}
                          className={`${featuredSpan} ${flip ? "lg:order-2" : ""}`}
                          style={{ height: SIZE_HEIGHTS[featuredSize] }}
                        />
                        <GalleryImage
                          src={pair}
                          alt={projectAlt(project, "widok 2")}
                          className={`${pairSpan} ${flip ? "lg:order-1" : ""}`}
                          style={{ height: SIZE_HEIGHTS[featuredSize] }}
                        />
                        {extraPair && (
                          <GalleryImage
                            src={extraPair}
                            alt={projectAlt(project, "widok 3")}
                            className="lg:col-span-3"
                            style={{ height: SIZE_HEIGHTS[featuredSize] }}
                          />
                        )}
                      </div>
                      {/* Row 2: remaining images */}
                      {row2.length > 0 &&
                        (() => {
                          // Flat single row: all images in one grid
                          if (project.flatRow2) {
                            return (
                              <div className="grid grid-cols-2 gap-4 lg:grid-cols-[1fr_1fr_2fr] lg:gap-6 lg:h-[clamp(320px,52vh,600px)]">
                                {row2.map((src, idx) => (
                                  <GalleryImage
                                    key={src}
                                    src={src}
                                    alt={projectAlt(project, "zdjęcie z realizacji")}
                                    className={`h-[clamp(180px,24vh,300px)] lg:h-full ${
                                      idx === row2.length - 1
                                        ? "col-span-2 lg:col-span-1"
                                        : ""
                                    }`}
                                  />
                                ))}
                              </div>
                            );
                          }
                          // Split: landscapes full width, portraits grouped
                          const portraits = row2.filter(
                            (src) => orientationFor(src) === "portrait",
                          );
                          const landscapes = row2.filter(
                            (src) => orientationFor(src) !== "portrait",
                          );
                          const portraitColsClass =
                            portraits.length >= 3
                              ? "md:grid-cols-3"
                              : portraits.length === 2
                                ? "md:grid-cols-2"
                                : "md:grid-cols-1";
                          return (
                            <>
                              {landscapes.map((src) => (
                                <GalleryImage
                                  key={src}
                                  src={src}
                                  alt={projectAlt(project, "zdjęcie z realizacji")}
                                  className="w-full"
                                  style={{
                                    height: SIZE_HEIGHTS[sizeFor(src, "sm")],
                                  }}
                                />
                              ))}
                              {portraits.length > 0 && (
                                <div
                                  className={`grid grid-cols-1 gap-4 lg:gap-6 ${portraitColsClass}`}
                                >
                                  {portraits.map((src) => (
                                    <GalleryImage
                                      key={src}
                                      src={src}
                                      alt={projectAlt(project, "zdjęcie z realizacji")}
                                      className="h-[clamp(320px,55vh,520px)] md:h-[clamp(480px,68vh,720px)]"
                                    />
                                  ))}
                                </div>
                              )}
                            </>
                          );
                        })()}
                    </div>
                  );
                })()
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                  {/* Featured largest image */}
                  <GalleryImage
                    src={featured}
                    alt={projectAlt(project, "widok główny")}
                    className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
                    style={{ height: SIZE_HEIGHTS[sizeFor(featured, "lg")] }}
                  />

                  {/* Secondary column */}
                  <div
                    className={`lg:col-span-5 flex flex-col gap-4 lg:gap-6 ${
                      flip ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Group consecutive portrait images side-by-side */}
                    {(() => {
                      const rows: {
                        type: "portraits" | "single";
                        items: string[];
                      }[] = [];
                      let i = 0;
                      while (i < rest.length) {
                        if (orientationFor(rest[i]) === "portrait") {
                          const group: string[] = [];
                          while (
                            i < rest.length &&
                            orientationFor(rest[i]) === "portrait"
                          ) {
                            group.push(rest[i]);
                            i++;
                          }
                          rows.push({ type: "portraits", items: group });
                        } else {
                          rows.push({ type: "single", items: [rest[i]] });
                          i++;
                        }
                      }
                      return rows.map((row) => {
                        if (row.type === "portraits" && row.items.length > 1) {
                          // Side-by-side portrait group — wąskie, wysokie
                          return (
                            <div
                              key={row.items.join("-")}
                              className="grid gap-4 lg:gap-6"
                              style={{
                                gridTemplateColumns: `repeat(${row.items.length}, minmax(0, 1fr))`,
                                height: SIZE_HEIGHTS.sm,
                              }}
                            >
                              {row.items.map((src) => (
                                <GalleryImage
                                  key={src}
                                  src={src}
                                  alt={projectAlt(project, "zdjęcie z realizacji")}
                                  className="h-full"
                                  style={{ height: "100%" }}
                                />
                              ))}
                            </div>
                          );
                        }
                        // Single (landscape) or solo portrait
                        const src = row.items[0];
                        const sizeKey = sizeFor(src, "sm");
                        return (
                          <GalleryImage
                            key={src}
                            src={src}
                            alt={projectAlt(project, "zdjęcie z realizacji")}
                            className="w-full"
                            style={{ height: SIZE_HEIGHTS[sizeKey] }}
                          />
                        );
                      });
                    })()}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
