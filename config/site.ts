export type SiteConfig = {
  name: string;
  authorName: string;
  username: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
    templateRepo: string;
  };
  ogImage: string;
  iconIco: string;
  logoIcon: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "Baris Atala | AtalaDev",
  authorName: "Barış Atala",
  username: "barisatala",
  description: "Founder of AtalaDev | Freelance Full Stack Developer",
  url: "https://ataladev.com",
  links: {
    twitter: "https://x.com/namanbarkiya",
    github: "https://github.com/AtalaBaris",
    templateRepo: "https://github.com/namanbarkiya/minimal-next-portfolio",
  },
  ogImage:
    "https://res.cloudinary.com/dvt5vkfwz/image/upload/v1767384721/naman_portfolio_og_image.png",
  iconIco:
    "https://res.cloudinary.com/dbfvcn3f6/image/upload/v1692357384/assets/naman-favicon.ico",
  logoIcon:
    "https://res.cloudinary.com/dbfvcn3f6/image/upload/v1692357294/assets/naman-logo.png",

  keywords: [
    "Barış Atala",
    "AtalaDev",
    "Software Engineer",
    "Full Stack Developer",
    "Freelance Developer",
    "Web Development",
    "modern web development",
    "Mobile Development",
    "Machine Learning",
    "Python Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "AI Startups",
    "Software Development",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "Tech Portfolio",
  ],
};
