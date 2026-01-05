import { Project, TeamMember, StatItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Games', href: '#games' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
];

export const STATS: StatItem[] = [
  { value: '1M+', label: 'Visits' },
  { value: '3', label: 'Games' },
  { value: '100K+', label: 'Likes' },
  { value: '50K+', label: 'Members' },
];

export const PROJECTS: Project[] = [
  {
    id: 'neon-city',
    title: 'Neon City RPG',
    description: 'Dive into a futuristic metropolis where you define your destiny. Complete missions, join factions, and dominate the streets.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJzq5LKLt6-ewiKUyQxhnb7Mra9XZjoaKZHq7WvoBH7kGcYH3Q1FU-RBAx368Wvn6c27S8Jnpyn-WGwfqpH3F5NnJ2etP6kBhqEvvcjhqNWW4hFf_bdH7GV9giaPRldDaKKeYIEJREiSP0nh077ypTQTxsEl1y_gFlETEWhr6FC063Iy37KOfnG_FafGwGmd10aCzCMppIb5rUhZethf56PxsqxcOzwWc_JwCCrfceVNLnZ61o7fkXnGchfag8w8qiqyW2q32t5GQ',
    visits: '1.2M',
    likes: '45K',
    favs: '12K',
    status: 'Full Release',
    badge: { text: 'BEST', colorClass: 'bg-yellow-500 text-black shadow-yellow-500/20' },
    statusColorClass: 'text-primary bg-primary/10 border-primary/20',
    playUrl: 'https://www.roblox.com/games/neon-city',
  },
  {
    id: 'island-survival',
    title: 'Island Survival',
    description: 'Stranded on a mysterious island. Gather resources, build a base, and survive the night against lurking creatures.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2L1PvwByVYDMGIMv3wmLCO9uDzmfLGOzn8WoM5WfiKgr7CYXhXYvFGjykkM-bw3imLd212J9VbuzRR7pDJ125BZDSkXm8DhgNGyPu2z_MG5ij3UozLBeS9ArOfkaDzm3nb9kIMq-HgRwbuCjZS9-pcxgt0dxWKfiPAvAajl2tJOH4uu74mYkfAGtw1IJyYN8wdB4v0fguZjsHQRmdEE1Ss9kjurV2yPgSRuEqQ4Gt3uoy3GwRBe31U_4SBhtw20wOpcuNqSqEcEc',
    visits: '850K',
    likes: '28K',
    favs: '9.5K',
    status: 'Beta Phase',
    badge: { text: 'UPDATED', colorClass: 'bg-primary text-white shadow-primary/20' },
    statusColorClass: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    playUrl: 'https://www.roblox.com/games/island-survival',
  },
  {
    id: 'galaxy-tycoon',
    title: 'Galaxy Tycoon',
    description: 'Build your own space station, mine asteroids, and trade with alien civilizations in this massive tycoon simulation.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG4so08X91PFEEUnIk6Ce7959g-vPNWicUyB57WVMfNnhBHyZg5mnyhtirkcftKWbn7DHItttUxEzt9Ksnr_2JqZ9Ru5CtiMu-fs6fkx72dZ_9tpj6TrmvBR-Yn_otK3OQEyB4P4urpicXpJklmN-_4H9FTTjpPy9MQhFyXN20aflvD3IiEg-aSE3NvxLsbLLTbmWSWoL-wkSBV-EOLHcCEPVqaNFx_cifW5PKo5Uf1oJ87JivGPCWLFO4HDgK9vgy9txk5bnEBa4',
    visits: '320K',
    likes: '8K',
    favs: '3K',
    status: 'Alpha',
    badge: { text: 'NEW', colorClass: 'bg-green-500 text-white shadow-green-500/20' },
    statusColorClass: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    playUrl: 'https://www.roblox.com/games/galaxy-tycoon',
  },
  {
    id: 'dungeon-quest',
    title: 'Dungeon Quest',
    description: 'Embark on an epic journey through procedural dungeons. Battle fearsome bosses, loot legendary gear, and uncover ancient secrets.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYiAVAfLXMkfnQuZL0ehcJFrdbrPq9j5pz5gyDJKTrD8dbOFAvxsHb4dWqPekncxXaukw4K70L23vRf5Fn7sqEMVA40gNBEi1TAQIGeITCPa1DnLoTe-RKRFvvNv7yYxwWoSDth3F7jNInH-Q983tcXFKSTnm6DqqByVw3pYsP3ETb1tURLiYmDYX9OdKaWhvt0egFqXXbbLqaSkU-HitX1dLiseHSTPmpXTdNia3xWm6wIeVsx2fSAui7fG4JMiqDx0M13KdwDJE',
    visits: '15K',
    likes: '1.5K',
    favs: '500',
    status: 'In Development',
    badge: { text: 'PRE-ALPHA', colorClass: 'bg-purple-500 text-white shadow-purple-500/20' },
    statusColorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    playUrl: '#',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alex',
    name: 'Alex',
    handle: "'Systems'",
    role: 'Lead Developer',
    description: 'Expert in Lua scripting and game architecture. Keeping the servers running since 2020.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyX7qV9k99Klwu6C4B4I_6zqKnVU1TNCNOHbV6KFfBvmisREO4rSgCOLs4CQp-xxSqIbEI4HaWxf40oRZqjwjUGW1gFusjeDXq1it3a1rMn19rcsN5itIfHUyZIIUkwvFzV5IDNKvimKHVG9eOQVyfqkEo_ZP3TUHM36Lq0jgUpJPBOR-asLN3k-LZiiaeWpA1xiHn8SgUPsayGXkJiE9ZmTK-whLNZfgsmuD0kXI8lzlPQLo-67UIqcAvcKodREG4Nx-vC8Caq2I',
    profileLink: '#alex-profile',
  },
  {
    id: 'sarah',
    name: 'Sarah',
    handle: "'Voxel'",
    role: 'Creative Director',
    description: 'Building immersive worlds and crafting unique visual styles for every experience.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY0Y3_V32HF41QSdDFnhMh5D800AIGmlaUcnH-GLGCYWdiLu2lzb1wMRbl7ORyzJg990veDI9oZNPnZutnA9goQGOkJh2Bwz6LpUsW4KzAlVKewjZIf-N3antLTEfevEoZsFRIai9uopmATFD6meUr_tLqvtVUPJQ7nAWrPiJXEZHIkgc_Ugx5Wkmuq8QPQj541g-AcyaguTD4VJ_cgCJInw4Ff3wZhj_32lkTjUekBiibAsErSQuIF2Yz9_0xHWjWkhmFDpdfqN4',
    profileLink: '#sarah-profile',
  },
];