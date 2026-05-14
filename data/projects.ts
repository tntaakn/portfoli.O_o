export interface RoleItem {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  video?: string;
  color: string;
  description: string;
  introduction: string;
  role: string;
  roleItems: RoleItem[];
  outcome: string;
  galleryImages: string[];
  additionalImages: string[];
}

export const projects: Project[] = [
    {
    id: 1,
    title: "FindBeauty",
    category: "E-CATALOGUE",
    year: "2025",
    image: "/images/project/E-catalouge/HomePage1.png",
    video: "/images/project/E-catalouge/Screen Recording 2026-05-09 191748.mp4",
    color: "#e49841",
    description: "UX-Focused Cosmetics Discovery Platform",
    introduction: "Users frequently experience 'choice overload' when navigating thousands of cosmetic options. My objective was finding the right product in the shortest time possible.",
    role: "Lead UX Designer of Team 3",
    roleItems: [
      {
        title: "Segmented User Flows",
        description: "Designed two distinct pathways: 'Experienced' (filters and comparisons) and 'Novice' (AI-driven skin analysis quiz)."
      },
      {
        title: "Comparison System",
        description: "Developed an intuitive, side-by-side comparison interface to reduce cognitive load by eliminating the need for tab-switching."
      },
      {
        title: "Advanced Filtering",
        description: "Engineered a multi-criteria filtering system with rigorous logic to ensure the highest result accuracy."
      }
    ],
    outcome: "Achieved >85% positive feedback from teacher and students in usability testing due to the refined, personalized interface.",
    galleryImages: [
      "/images/project/E-catalouge/View1.png",
      "/images/project/E-catalouge/View2.png",
      "/images/project/E-catalouge/Overall1.png",
    ],
    additionalImages: [
      "/images/project/E-catalouge/HomePage.png",
      "/images/project/E-catalouge/Overall.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 2.png",
      "/images/project/E-catalouge/Frame 3.png",      
    ],
  },
  {
    id: 2,
    title: "Techdies",
    category: "INTERACTIVE PLATFORM",
    year: "2026",
    image: "/images/project/Web/View1.png",
    video: "/images/project/Web/Screen Recording 2026-05-09 192612.mp4",
    color: "#6366F1",
    description: "AI-Powered Gamified English Learning",
    introduction: "My objective was to transform English learning from a repetitive task into an immersive \"Space Exploration\" adventure in order to maintain a child's focus during language acquisition",
    role: "BA, UI/UX Designer & FE Developer",
    roleItems: [
      {
        title: "Gamified UX Architecture",
        description: "Integrated diverse game mechanics, including Leaderboards, Flashcards, and interactive 'Missions' to sustain long-term motivation."
      },
      {
        title: "Mascot & Branding",
        description: "Utilized Adobe Illustrator and Figma to build 'Techdies' mascot and background elements which are suitable for the brand's playful and educational identity."
      }
    ],
    outcome: "Sustained high user retention with >70% positive rating from teachers and parents. Successfully authored the GELW_SRS document, ensuring total alignment between business analysis and technical implementation.",
    galleryImages: [
      "/images/project/Web/View 1.png",
      "/images/project/Web/Overall1.png",
      "/images/project/Web/Flow.png",
    ],
    additionalImages: [
      "/images/project/Web/Overall.png",
      "/images/project/Web/Frame 4.png",
      "/images/project/Web/Frame 3.png",
      "/images/project/Web/Frame 2.png",
      "/images/project/Web/Frame 1.png",
    ],
  },
  {
    id: 3,
    title: "SERINITY HOTEL",
    category: "HOTEL BOOKING PLATFORM",
    year: "2025",
    image: "/images/project/Hotel Guest/View2.png",
    video: "/images/project/Hotel Guest/Screen Recording 2026-05-15 045641.mp4",
    color: "#3898e7",
    description: "A Seamless Booking Hospitality Experience",
    introduction: "Complex booking processes are often the primary driver of user drop-offs. My objective was to design a platform that embodies 'Serenity' by enabling users to search, compare, and book in just a few minimalist steps",
    role: "UI/UX Designer & Frontend Developer",
    roleItems: [
      {
        title: "Hero-Centric Booking Engine",
        description: "Placed core booking tools at the heart of the Home page to drive immediate user action."
      },
      {
        title: "Comprehensive User Dashboard",
        description: "Developed 'My Booking' pages for seamless stay management, enhancing personalization and long-term user retention."
      },
    ],
    outcome: "Built a comprehensive UI Kit for the hotel web platform, ensuring high scalability for future features.",
    galleryImages: [
      "/images/project/Hotel Guest/View2.png",
      "/images/project/Hotel Guest/View1.png",
      "/images/project/Hotel Guest/Overall1.png",
    ],
    additionalImages: [
      "/images/project/Hotel Guest/Overall.png",
      "/images/project/Hotel Guest/Frame 1.png",
      "/images/project/Hotel Guest/Frame 2.png",
      "/images/project/Hotel Guest/Frame 3.png",
    ],
  },
  {
    id: 4,
    title: "TechMind",
    category: "MANAGEMENT SYSTEM",
    year: "2025",
    image: "/images/project/Manage User/View1.png",
    video: "/images/project/Manage User/View1.png",
    color: "#6366F1",
    description: "Comprehensive Admin Suite for EdTech Monitoring & Content Control",
    introduction: "The goal was to design a dashboard that empowers administrators to oversee user activity, manage content, and ensure a safe learning environment with ease and efficiency.",
    role: "UI/UX Designer",
    roleItems: [
      {
        title: "Data-Driven Dashboard",
        description: "Utilized line and doughnut charts to visualize user growth and subscription rates. The design prioritizes Key Performance Indicators (KPIs) in high-visibility zones."
      },
      {
        title: "Resource & Content Management",
        description: "Optimized the workflow for uploading lessons and managing vocabulary/multimedia resources through a form interface, significantly reducing data entry errors."
      }
    ],
    galleryImages: [
      "/images/project/Manage User/Overall1.png",
      "/images/project/Manage User/View2.png",      
      "/images/project/Manage User/Userflow.png",
    ],
    additionalImages: [
      "/images/project/Manage User/Overall.png",
      "/images/project/Manage User/Frame 4.png",
      "/images/project/Manage User/Frame 2.png",
      "/images/project/Manage User/Frame 1.png",
      "/images/project/Manage User/Frame 3.png",
    ],
    outcome: "The project resulted in a highly engaging and user-friendly platform that significantly improved user satisfaction and conversion rates.",
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
