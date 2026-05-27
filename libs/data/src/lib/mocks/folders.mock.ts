import { Category, Folder } from '../models/email.model';

export const MOCK_FOLDERS: Folder[] = [
  { id: 'inbox', name: 'Inbox', icon: 'inbox', count: 128 },
  { id: 'drafts', name: 'Drafts', icon: 'drafts', count: 9 },
  { id: 'sent', name: 'Sent', icon: 'sent' },
  { id: 'junk', name: 'Junk', icon: 'junk', count: 23 },
  { id: 'trash', name: 'Trash', icon: 'trash' },
  { id: 'archive', name: 'Archive', icon: 'archive' },
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 'social', name: 'Social', icon: 'social', count: 972 },
  { id: 'updates', name: 'Updates', icon: 'updates', count: 342 },
  { id: 'forums', name: 'Forums', icon: 'forums', count: 128 },
  { id: 'shopping', name: 'Shopping', icon: 'shopping', count: 8 },
  { id: 'promotions', name: 'Promotions', icon: 'promotions', count: 21 },
];
