import { useState } from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({
  project,
  index,
  className = "",
  style,
}: ProjectCardProps) {
  const [active, setActive] = useState(0);
  const images = project.images;
  const hasMultiple = images.length > 1;

  const metaItems = [project.location, project.year, project.category, project.area].filter(
    (item): item is string => Boolean(item && item.length > 0)
  );

  return (
    <div
      className={`project-card reveal-wrapper cursor-none ${className}`.trim()}
      style={style}
    >
      <div className="reveal-inner w-full h-full relative">
        <img
          className="w-full h-full object-cover"
          src={images[active]}
          alt={project.title}
        />

        <div className="hover-info absolute inset-0 bg-warm-ink/20 flex flex-col justify-end p-6 lg:p-8">
          <div className="border-t border-warm-mist/50 pt-4">
            <p className="font-serif italic text-warm-paper text-xl lg:text-2xl mb-2">
              {project.title}
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {metaItems.map((item) => (
                <span key={item} className="micro-caps text-warm-mist">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
          <span className="micro-caps text-warm-mist/70">
            {project.badge ?? `P.0${index + 1}`}
          </span>
        </div>

        {hasMultiple && (
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex gap-2 z-10">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActive(i)}
                className={`block w-12 h-12 overflow-hidden border transition-all cursor-none ${
                  i === active
                    ? "border-warm-paper opacity-100"
                    : "border-warm-mist/40 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Zdjęcie ${i + 1}`}
              >
                <img
                  className="w-full h-full object-cover pointer-events-none"
                  src={img}
                  alt=""
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
