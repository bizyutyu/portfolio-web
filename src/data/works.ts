export type Work = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  url?: string;
};

export const works: Work[] = [
  {
    id: "work-1",
    title: "プロジェクト名",
    description: "プロジェクトの概要説明をここに記述します。",
    tech: ["Haskell", "TypeScript"],
    image: "/images/robot.png",
    github: "https://github.com/bizyutyu",
  },
  {
    id: "work-2",
    title: "プロジェクト名 2",
    description: "プロジェクトの概要説明をここに記述します。",
    tech: ["Next.js", "React"],
    image: "/images/pukuzoma.png",
    github: "https://github.com/bizyutyu",
  },
];
