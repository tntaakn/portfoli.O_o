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
  roleItems: RoleItem[];
  galleryImages: string[];
  additionalImages: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NEO-MONOLITH",
    category: "ARCHITECTURE",
    year: "2023",
    image: "/images/project/E-catalouge/Frame 1.png",
    video: "/images/project/E-catalouge/Screen Recording 2026-05-09 191748.mp4",
    color: "#D97706",
    description: "A brutalist architectural masterpiece showcasing the raw beauty of concrete and geometric precision. This project explores the intersection of modern minimalism and timeless structural design.",
    introduction: "This project was commissioned to create a visual identity for a modern architectural firm. The goal was to capture the essence of brutalist design while maintaining a sense of warmth and approachability.",
    roleItems: [
      {
        title: "UX Competitive Analysis",
        description: "Auditing and benchmarking industry giants to identify architectural design pain points and opportunities."
      },
      {
        title: "UI Design",
        description: "Crafting a high-fidelity interface for the brand ecosystem, ensuring a seamless and functional user journey."
      },
      {
        title: "Visual Assets & Iconography",
        description: "Designing a custom icon set and promotional materials to maintain brand consistency throughout the application."
      }
    ],
    galleryImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
    additionalImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
  },
  {
    id: 2,
    title: "SILK & STEEL",
    category: "EDITORIAL",
    year: "2024",
    image: "/images/project/E-catalouge/Frame 1.png",
    video: "/images/project/E-catalouge/Screen Recording 2026-05-09 191748.mp4",
    color: "#6366F1",
    description: "An editorial fashion series that juxtaposes delicate fabrics against industrial backdrops, creating a compelling visual narrative of strength and elegance.",
    introduction: "A high-fashion editorial shoot exploring the contrast between softness and strength. The series was featured in multiple fashion publications and received critical acclaim for its bold visual approach.",
    roleItems: [
      {
        title: "Art Direction",
        description: "Leading the creative vision and visual storytelling for the entire editorial series."
      },
      {
        title: "Styling Consultation",
        description: "Collaborating with stylists to achieve the perfect balance between delicate fabrics and industrial aesthetics."
      },
      {
        title: "Photo Editing",
        description: "Post-production work including color grading, retouching, and final composition adjustments."
      }
    ],
    galleryImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
    additionalImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
  },
  {
    id: 3,
    title: "DIGITAL DREAMS",
    category: "WEB DESIGN",
    year: "2024",
    image: "/images/project/E-catalouge/Frame 1.png",
    video: "/images/project/E-catalouge/Screen Recording 2026-05-09 191748.mp4",
    color: "#10B981",
    description: "An immersive web experience that pushes the boundaries of digital interaction, featuring 3D elements and fluid animations.",
    introduction: "This project reimagines the digital experience through innovative UI/UX design. The website features cutting-edge animations and interactive elements that engage users on a deeper level.",
    roleItems: [
      {
        title: "UI/UX Design",
        description: "Creating intuitive user interfaces with cutting-edge animations and interactive elements."
      },
      {
        title: "Prototyping",
        description: "Building interactive prototypes to test and validate design concepts before development."
      },
      {
        title: "Front-end Development",
        description: "Implementing responsive designs with modern frameworks and animation libraries."
      }
    ],
    galleryImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
    additionalImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
  },
  {
    id: 4,
    title: "SILK & STEEL",
    category: "EDITORIAL",
    year: "2024",
    image: "/images/project/E-catalouge/Frame 1.png",
    video: "/images/project/E-catalouge/Screen Recording 2026-05-09 191748.mp4",
    color: "#6366F1",
    description: "An editorial fashion series that juxtaposes delicate fabrics against industrial backdrops, creating a compelling visual narrative of strength and elegance.",
    introduction: "A high-fashion editorial shoot exploring the contrast between softness and strength. The series was featured in multiple fashion publications and received critical acclaim for its bold visual approach.",
    roleItems: [
      {
        title: "Art Direction",
        description: "Leading the creative vision and visual storytelling for the entire editorial series."
      },
      {
        title: "Styling Consultation",
        description: "Collaborating with stylists to achieve the perfect balance between delicate fabrics and industrial aesthetics."
      },
      {
        title: "Photo Editing",
        description: "Post-production work including color grading, retouching, and final composition adjustments."
      }
    ],
    galleryImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
    additionalImages: [
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
      "/images/project/E-catalouge/Frame 1.png",
    ],
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
