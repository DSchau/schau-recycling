export interface Frontmatter {
  title: string;
  date: Date;
  draft: boolean;
  path: string;
}

export interface FrontmatterNode {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
}
