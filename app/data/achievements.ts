import type { Achievement } from "../types/achievement";

export const achievements: Achievement[] = [
  {
    number: "01",
    category: "Academic",
    title: "Dean's List",
    subtitle: "Academic Recognition · 2018 - 2021",
    description:
      "Recognized for consistent academic performance at National University.",
    images: [
      {
        src: "/images/achievements/deans-list-photo.jpg",
        title: "Dean's List Recognition",
        alt: "Dean's List recognition photo",
      },
      {
        src: "/images/achievements/deans-list-certificate.png",
        title: "Consistent Dean's List Awardee",
        alt: "Dean's List academic certificate",
      },
    ],
    links: [],
  },
  {
    number: "02",
    category: "Sports",
    title: "UAAP Season 81 Women's Chess",
    subtitle: "Gold Medalist · 2018 - 2019",
    description:
      "Won gold in UAAP Season 81 Women's Chess and received coverage from sports and news publications.",
    images: [
      {
        src: "/images/achievements/chess-photo.png",
        title: "Chess Journey",
        alt: "Personal chess photograph",
      },
      {
        src: "/images/achievements/chess-abscbn.png",
        title: "ABS-CBN Sports",
        alt: "ABS-CBN article screenshot covering UAAP chess",
      },
      {
        src: "/images/achievements/chess-tiebreakertimes.png",
        title: "Tiebreaker Times",
        alt: "Tiebreaker Times article covering UAAP women's chess",
      },
      {
        src: "/images/achievements/chess-businessworld.png",
        title: "BusinessWorld",
        alt: "BusinessWorld article covering UAAP women's chess",
      },
    ],
    links: [
      {
        label: "Read on ABS-CBN",
        href: "https://www.abs-cbn.com/sports/10/21/19/uaap-feu-cruising-to-mens-chess-crown",
      },
      {
        label: "Read on Tiebreaker Times",
        href: "https://tiebreakertimes.com.ph/tbt/feu-still-top-uaap-womens-chess/166532",
      },
      {
        label: "Read on BusinessWorld",
        href: "https://bworldonline.com/sports/2019/05/13/230712/uaap-women-wars-2/",
      },
    ],
  },
  {
    number: "03",
    category: "Certification",
    title: "iCore",
    subtitle: "Certification · 2021",
    description:
      "Participated in and presented research at the First International Conference on Information and Computing Research.",
    images: [
      {
        src: "/images/achievements/icore-certificate.jpg",
        title: "iCore Certificate",
        alt: "iCore certification document",
      },
    ],
    links: [
      {
        label: "Read on IEEE Xplore",
        href: "https://ieeexplore.ieee.org/document/9681407",
      },
    ],
  },
  {
    number: "04",
    category: "Professional",
    title: "Strive Award",
    subtitle: "Innovation Award · 2024",
    description:
      "Recognized by Acquiro Solutions and Technology Inc. for innovation and contributions to the organization.",
    images: [
      {
        src: "/images/achievements/strive-award.png",
        title: "Strive Innovation Award",
        alt: "Strive Innovation Award recognition",
      },
    ],
    links: [
      {
        label: "View Award Announcement",
        href: "https://asticomgroup.com/careers-culture/",
      },
    ],
  },
];
