export type Work = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
};

export const works: Work[] = [];
