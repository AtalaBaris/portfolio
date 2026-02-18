import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "React Native",
    description:
      "Developing cross-platform mobile applications, like my project DreamTales.",
    rating: 5,
    icon: Icons.react,
  },

  {
    name: "Next.js",
    description:
      "Building high-performance, SEO-friendly web applications with React framework.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Tailwind CSS",
    description:
      "Crafting modern, responsive, and pixel-perfect user interfaces rapidly.",
    rating: 5,
    icon: Icons.tailwindcss,
  },

  {
    name: "Python",
    description:
      "Writing efficient scripts for automation, data processing, and IoT systems.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Flutter",
    description:
      "Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    rating: 5,
    icon: Icons.react, // Icons.flutter yoksa geçici olarak Icons.react kalsın, ikonu sonra ekleriz
  },
  {
    name: "Dart",
    description:
      "Developing fast, high-performance apps with a client-optimized language for multi-platform development.",
    rating: 5,
    icon: Icons.typescript, // Icons.dart yoksa geçici kalsın
  },
  {
    name: "Node.js",
    description:
      "Creating scalable server-side applications and robust RESTful APIs.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "IoT & Raspberry Pi",
    description:
      "Integrating hardware and software for smart systems like automated sorting.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "TypeScript",
    description:
      "Enhancing code reliability and maintainability with static typing.",
    rating: 5,
    icon: Icons.typescript,
  },

  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },

  {
    name: "Angular",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 3,
    icon: Icons.angular,
  },

  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 2,
    icon: Icons.mysql,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
