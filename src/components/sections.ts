export const SECTION_IDS = ['how', 'work', 'games', 'skills', 'experience', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];
