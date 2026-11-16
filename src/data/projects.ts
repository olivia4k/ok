export interface ProjectImage {
  src: string;
  size: "large" | "medium" | "small";
}

export type GalleryRowSize = "xs" | "sm" | "md" | "mdTall" | "lg" | "xl";

/** Rząd galerii na mobile. */
export interface GalleryMobileRow {
  images: string[];
  /**
   * Udziały szerokości kolumn, np. [3, 2]. Zdjęcia mają wtedy naturalne
   * proporcje i wyrównaną wysokość (bez przycinania do 2:3).
   */
  ratios?: number[];
}

/**
 * Własny rząd galerii.
 * `desktop` — kolejność zdjęć obok siebie (lg+),
 * `mobileRows` — układ na mobile (domyślnie jedno zdjęcie na rząd w tej
 * samej kolejności co `desktop`; przy nieparzystej liczbie zdjęć pierwsze
 * zajmuje całą szerokość).
 */
export interface GalleryRow {
  desktop: string[];
  mobileRows?: GalleryMobileRow[];
  /** Udziały szerokości kolumn na desktopie, np. [2, 1, 1]. */
  ratios?: number[];
  /** Wysokość rzędu na desktopie (domyślnie dobierana automatycznie). */
  size?: GalleryRowSize;
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
  /** Wysokość pierwszego rzędu (domyślnie `xl` dla pionowego, `lg` dla poziomego zdjęcia głównego). */
  featuredSize?: GalleryRowSize;
  /** Nadpisuje domyślny układ drugiego rzędu galerii. */
  galleryRows?: GalleryRow[];
  /**
   * Na mobile pierwsze zdjęcie idzie na całą szerokość, a `pairImage` oraz
   * `extraPairImage` stoją obok siebie (pionowo, 3:4).
   */
  mobilePairRow1?: boolean;
  /** Na mobile pomija `pairImage` w pierwszym rzędzie (zdjęcie pojawia się niżej). */
  mobileHidePair?: boolean;
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
      "/images/zytnia_9.webp",
      "/images/zytnia_10.webp",
    ],
    layout: "large",
    pairImage: "/images/zytnia_3.webp",
    galleryRows: [
      // Zytnia_2 obok zytnia_5; na mobile zytnia_2 samodzielnie.
      {
        desktop: ["/images/zytnia_2.webp", "/images/zytnia_5.webp"],
        mobileRows: [{ images: ["/images/zytnia_2.webp"] }],
      },
      // Zytnia_7 w miejscu zytnia_5; na mobile po dwa: 7, 6 oraz 5, 4.
      {
        desktop: [
          "/images/zytnia_4.webp",
          "/images/zytnia_7.webp",
          "/images/zytnia_6.webp",
        ],
        mobileRows: [
          {
            images: [
              "/images/zytnia_7.webp",
              "/images/zytnia_6.webp",
              "/images/zytnia_5.webp",
              "/images/zytnia_4.webp",
            ],
          },
        ],
      },
      // Zytnia_9 (węższe, pionowe) obok zytnia_10 — na mobile na końcu.
      {
        desktop: ["/images/zytnia_9.webp", "/images/zytnia_10.webp"],
        ratios: [2, 3],
        size: "xl",
        mobileRows: [
          {
            images: ["/images/zytnia_9.webp", "/images/zytnia_10.webp"],
            ratios: [2, 3],
          },
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
      "/images/zoliborz_5.webp",
      "/images/zoliborz_6.webp",
      "/images/zoliborz_3.webp",
      "/images/zoliborz_4.webp",
      "/images/zoliborz_1.webp",
    ],
    layout: "small",
    pairImage: "/images/zoliborz_6.webp",
    featuredSize: "xl",
    // Na mobile zoliborz_6 pokazujemy niżej, w parze z zoliborz_3.
    mobileHidePair: true,
    galleryRows: [
      // Zoliborz_3 duże obok mniejszych zoliborz_4 i zoliborz_1.
      {
        desktop: [
          "/images/zoliborz_3.webp",
          "/images/zoliborz_4.webp",
          "/images/zoliborz_1.webp",
        ],
        ratios: [2, 1, 1],
        size: "lg",
        // Mobile: para 6 (3/5) + 3 (2/5), pod nią para 4 (2/5) + 1 (3/5).
        mobileRows: [
          {
            images: ["/images/zoliborz_6.webp", "/images/zoliborz_3.webp"],
            ratios: [3, 2],
          },
          {
            images: ["/images/zoliborz_4.webp", "/images/zoliborz_1.webp"],
            ratios: [2, 3],
          },
        ],
      },
    ],
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
