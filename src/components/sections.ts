export const SECTION_IDS = ['about', 'skills', 'projects', 'recent', 'games', 'experience', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];
