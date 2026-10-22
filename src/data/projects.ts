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
      "/images/zytnia_1.png",
      "/images/zytnia_2.png",
      "/images/zytnia_3.png",
      "/images/zytnia_4.png",
      "/images/zytnia_5.png",
      "/images/zytnia_6.png",
    ],
    layout: "large",
    pairImage: "/images/zytnia_3.png",
  },
  {
    id: "zoliborz",
    title: "Żoliborz",
    type: "Mieszkanie",
    location: "Warszawa",
    year: "2021",
    images: [
      "/images/zoliborz_4.png",
      "/images/zoliborz_1.png",
      "/images/zoliborz_3.png",
      "/images/zoliborz_6.png",
      "/images/zoliborz_5.png",
    ],
    layout: "small",
    pairImage: "/images/zoliborz_1.png",
    flatRow2: true,
  },
  {
    id: "antoniewska",
    title: "Antoniewska",
    type: "Mieszkanie",
    location: "Warszawa",
    year: "2025",
    images: ["/images/antoniewska_2.png", "/images/antoniewska_3.png"],
    layout: "small",
    pairImage: "/images/antoniewska_3.png",
  },
];
