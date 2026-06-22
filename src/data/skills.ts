export type Skill = {
  name: string;
  category?: string;
};

export const skills: Skill[] = [
  // Active
  { name: "Go", category: "Active" },
  { name: "TypeScript", category: "Active" },
  { name: "React", category: "Active" },
  { name: "NestJS", category: "Active" },
  { name: "AWS", category: "Active" },
  { name: "Docker", category: "Active" },
  { name: "Terraform", category: "Active" },
  { name: "MySQL", category: "Active" },

  // Experience
  { name: "Haskell", category: "Experience" },
  { name: "Rust", category: "Experience" },
  { name: "Python", category: "Experience" },
  { name: "JavaScript", category: "Experience" },
  { name: "Java", category: "Experience" },
  { name: "Scala", category: "Experience" },
  { name: "Kotlin", category: "Experience" },
  { name: "C++", category: "Experience" },
  { name: "C#", category: "Experience" },
  { name: "C", category: "Experience" },
  { name: "PHP", category: "Experience" },
  { name: "PostgreSQL", category: "Experience" },

  // 関心領域
  { name: "形式手法", category: "関心領域" },
  { name: "Coq", category: "関心領域" },
  { name: "関数型プログラミング", category: "関心領域" },
];
