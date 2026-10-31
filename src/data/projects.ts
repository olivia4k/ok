export interface ProjectImage {
  src: string;
  size: "large" | "medium" | "small";
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
    ],
    layout: "large",
    pairImage: "/images/zytnia_3.webp",
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
  },
];
