export const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'recent', 'games', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];
