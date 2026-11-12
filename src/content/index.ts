import type { Lang, SiteContent } from './types';
import { fixtureContent, fixtureShared } from '../dev/fixture';

export type { Lang, SiteContent, SharedContent } from './types';

export const content: Record<Lang, SiteContent> = fixtureContent;
export const shared = fixtureShared;
