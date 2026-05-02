export interface Project {
  id: string;
  client: string;
  type: string;
  year: string;
  format: string;
  kpi: string;
  desc: string;
  tags: string[];
  palette: [string, string, string];
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'signal';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';
