export const SECTION_IDS = ['about', 'projects', 'recent', 'games', 'skills', 'experience', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];
