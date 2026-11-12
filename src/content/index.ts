import type { Lang, SiteContent } from './types';
import { tr } from './tr';
import { en } from './en';

export type { Lang, SiteContent, SharedContent } from './types';
export { shared } from './shared';

export const content: Record<Lang, SiteContent> = { tr, en };
