import { TagVariant } from '@kw-inbox/ui';

export interface Email {
  id: string;
  from: { name: string; email: string };
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  read: boolean;
  labels: { name: string; variant: TagVariant }[];
  folder: FolderType;
}

export type FolderType = 'inbox' | 'drafts' | 'sent' | 'junk' | 'trash' | 'archive';

export interface Folder {
  id: FolderType;
  name: string;
  icon: string;
  count?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
}
