export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  visits: string;
  likes: string;
  favs: string;
  status: 'Full Release' | 'Beta Phase' | 'Alpha' | 'In Development' | 'Live';
  badge?: {
    text: string;
    colorClass: string;
  };
  statusColorClass: string;
  playUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  handle: string;
  role: string;
  description: string;
  imageUrl: string;
  profileLink: string;
}

export interface StatItem {
  value: string;
  label: string;
}