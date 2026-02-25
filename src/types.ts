export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tools: string;
  createdAt: string;
}

export type Category = "All" | "Logos" | "Branding" | "Social Media" | "UI Design" | "Posters";
