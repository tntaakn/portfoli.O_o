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
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    video: "https://videos.pexels.com/video-files/7578554/7578554-uhd_2560_1440_30fps.mp4",
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
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800&q=80",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80",
      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "SILK & STEEL",
    category: "EDITORIAL",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    video: "https://videos.pexels.com/video-files/4625518/4625518-uhd_2560_1440_30fps.mp4",
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
      "../public/images/magical-forest.jpg",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "DIGITAL DREAMS",
    category: "WEB DESIGN",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
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
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "SILK & STEEL",
    category: "EDITORIAL",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    video: "https://videos.pexels.com/video-files/4625518/4625518-uhd_2560_1440_30fps.mp4",
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
      "../public/images/magical-forest.jpg",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
