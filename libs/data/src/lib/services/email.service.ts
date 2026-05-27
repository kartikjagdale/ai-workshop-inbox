import { computed, Injectable, signal } from '@angular/core';
import { Email, Folder, FolderType, Category } from '../models/email.model';
import { MOCK_EMAILS } from '../mocks/emails.mock';
import { MOCK_FOLDERS, MOCK_CATEGORIES } from '../mocks/folders.mock';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly emails = signal<Email[]>(MOCK_EMAILS);
  private readonly selectedFolder = signal<FolderType>('inbox');
  private readonly selectedEmailId = signal<string | null>(MOCK_EMAILS[0]?.id ?? null);
  private readonly filterUnread = signal<boolean>(false);

  readonly folders = signal<Folder[]>(MOCK_FOLDERS);
  readonly categories = signal<Category[]>(MOCK_CATEGORIES);
  readonly activeFolder = this.selectedFolder.asReadonly();

  readonly filteredEmails = computed(() => {
    let result = this.emails().filter(e => e.folder === this.selectedFolder());
    if (this.filterUnread()) {
      result = result.filter(e => !e.read);
    }
    return result;
  });

  readonly selectedEmail = computed(() =>
    this.emails().find(e => e.id === this.selectedEmailId()) ?? null
  );

  readonly unreadCount = computed(() =>
    this.emails().filter(e => e.folder === this.selectedFolder() && !e.read).length
  );

  selectFolder(folder: FolderType): void {
    this.selectedFolder.set(folder);
    this.selectedEmailId.set(null);
  }

  selectEmail(id: string): void {
    this.selectedEmailId.set(id);
    this.markAsRead(id);
  }

  setUnreadFilter(unread: boolean): void {
    this.filterUnread.set(unread);
  }

  markAsRead(id: string): void {
    this.emails.update(emails =>
      emails.map(e => e.id === id ? { ...e, read: true } : e)
    );
  }
}
