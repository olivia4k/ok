export interface ProjectImage {
  src: string;
  size: "large" | "medium" | "small";
}

/**
 * Własny rząd galerii.
 * `desktop` — kolejność zdjęć obok siebie (lg+),
 * `mobile` — kolejność na mobile (domyślnie taka sama jak `desktop`).
 * Na mobile zdjęcia portretowe łamią się po dwa w rzędzie i zachowują
 * proporcje pionowe (2:3); jeśli `mobile` ma jedno zdjęcie, wyświetla się
 * ono samodzielnie na całą szerokość.
 */
export interface GalleryRow {
  desktop: string[];
  mobile?: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  location?: string;
  year?: string;
  category?: string;
  area?: string;
  images: string[];
  layout: "large" | "small";
  badge?: string;
  pairImage?: string;
  extraPairImage?: string;
  flatRow2?: boolean;
  /** Nadpisuje domyślny układ drugiego rzędu galerii. */
  galleryRows?: GalleryRow[];
  /**
   * Na mobile pierwsze zdjęcie idzie na całą szerokość, a `pairImage` oraz
   * `extraPairImage` stoją obok siebie (pionowo, 3:4).
   */
  mobilePairRow1?: boolean;
}

export const projects: Project[] = [
  {
    id: "zytnia",
    title: "Żytnia",
    type: "Dom",
    location: "Toruń",
    year: "2023",
    images: [
      "/images/zytnia_1.webp",
      "/images/zytnia_2.webp",
      "/images/zytnia_3.webp",
      "/images/zytnia_4.webp",
      "/images/zytnia_5.webp",
      "/images/zytnia_6.webp",
      "/images/zytnia_7.webp",
    ],
    layout: "large",
    pairImage: "/images/zytnia_3.webp",
    galleryRows: [
      // Zytnia_2 obok zytnia_5; na mobile zytnia_2 samodzielnie.
      {
        desktop: ["/images/zytnia_2.webp", "/images/zytnia_5.webp"],
        mobile: ["/images/zytnia_2.webp"],
      },
      // Zytnia_7 w miejscu zytnia_5; na mobile po dwa: 7, 6 oraz 5, 4.
      {
        desktop: [
          "/images/zytnia_4.webp",
          "/images/zytnia_7.webp",
          "/images/zytnia_6.webp",
        ],
        mobile: [
          "/images/zytnia_7.webp",
          "/images/zytnia_6.webp",
          "/images/zytnia_5.webp",
          "/images/zytnia_4.webp",
        ],
      },
    ],
  },
  {
    id: "zoliborz",
    title: "Żoliborz",
    type: "Mieszkanie",
    location: "Warszawa",
    year: "2021",
    images: [
      "/images/zoliborz_4.webp",
      "/images/zoliborz_1.webp",
      "/images/zoliborz_3.webp",
      "/images/zoliborz_6.webp",
      "/images/zoliborz_5.webp",
    ],
    layout: "small",
    pairImage: "/images/zoliborz_1.webp",
    flatRow2: true,
  },
  {
    id: "antoniewska",
    title: "Antoniewska",
    type: "Mieszkanie",
    location: "Warszawa",
    year: "2025",
    images: [
      "/images/antoniewska_2.webp",
      "/images/antoniewska_3.webp",
      "/images/antoniewska_7.webp",
    ],
    layout: "small",
    pairImage: "/images/antoniewska_3.webp",
    extraPairImage: "/images/antoniewska_7.webp",
    mobilePairRow1: true,
  },
];
