import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  MenuBarComponent, CardComponent, TabButtonComponent,
  IconButtonComponent, IconComponent, ToggleComponent,
} from '@kw-inbox/ui';
import { EmailService, FolderType } from '@kw-inbox/data';

@Component({
  selector: 'kw-feature-inbox-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MenuBarComponent, CardComponent, TabButtonComponent,
    IconButtonComponent, IconComponent, ToggleComponent,
  ],
  template: `
    <div class="flex h-screen bg-white font-['Inter']">
      <!-- Column 1: Sidebar -->
      <kw-menu-bar
        [userName]="'Alicia Koch'"
        [folders]="emailService.folders()"
        [categories]="emailService.categories()"
        [activeId]="emailService.activeFolder()"
        (folderSelect)="onFolderSelect($event)"
      />

      <!-- Column 2: Inbox List -->
      <div class="flex flex-col w-[432px] min-w-[432px] max-w-[510px]">
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-2 border-b border-[#e4e4e7]">
          <h1 class="text-[22px] font-bold text-[#181818]">{{ activeTitle() }}</h1>
          <kw-tab-button
            [tabs]="['All mail', 'Unread']"
            [activeTab]="activeTab()"
            (tabChange)="onTabChange($event)"
          />
        </div>

        <!-- Search + Cards -->
        <div class="flex flex-col gap-4 p-4">
          <!-- Search bar -->
          <div class="flex items-center gap-4 h-10 px-3 border border-[#e4e4e7] rounded-lg">
            <kw-icon name="search" [size]="20" />
            <span class="text-base font-normal text-[#71717a]">Search</span>
          </div>

          <!-- Email list -->
          <div class="flex flex-col gap-2 overflow-y-auto">
            @for (email of emailService.filteredEmails(); track email.id) {
              <kw-card
                [email]="email"
                [selected]="email.id === emailService.selectedEmail()?.id"
                (cardSelect)="onEmailSelect($event)"
              />
            } @empty {
              <div class="p-8 text-center text-[#71717a]">
                No messages in this folder
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Column 3: Email Detail -->
      <div class="flex flex-col flex-1 min-w-0 border-l border-[#e4e4e7] h-screen">
        @if (emailService.selectedEmail(); as email) {
          <!-- Toolbar -->
          <div class="flex items-center justify-between p-2 border-b border-[#e4e4e7]">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <kw-icon-button icon="archive" ariaLabel="Archive" />
                <kw-icon-button icon="junk" ariaLabel="Junk" />
                <kw-icon-button icon="trash" ariaLabel="Trash" />
              </div>
              <div class="h-6 w-0 border-l border-[#e4e4e7]"></div>
              <kw-icon-button icon="clock" ariaLabel="Snooze" />
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <kw-icon-button icon="reply" ariaLabel="Reply" />
                <kw-icon-button icon="reply-all" ariaLabel="Reply All" />
                <kw-icon-button icon="forward" ariaLabel="Forward" />
              </div>
              <div class="h-6 w-0 border-l border-[#e4e4e7]"></div>
              <kw-icon-button icon="3dots" ariaLabel="More" />
            </div>
          </div>

          <!-- Email header -->
          <div class="flex items-start justify-between p-4 border-b border-[#e4e4e7]">
            <div class="flex gap-4 items-start">
              <div class="flex items-center justify-center size-[42px] rounded-full bg-[#f4f4f5] shrink-0">
                <kw-icon name="gmail" [size]="20" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-[#18181b]">{{ email.from.name }}</span>
                <span class="text-xs font-normal text-[#181818]">{{ email.subject }}</span>
                <span class="text-xs font-normal text-[#181818]">
                  <span class="font-medium">Re:</span> {{ email.from.email }}
                </span>
              </div>
            </div>
            <span class="text-xs font-normal text-[#71717a] whitespace-nowrap">{{ email.timestamp }}</span>
          </div>

          <!-- Email body -->
          <div class="flex-1 overflow-y-auto p-4 border-b border-[#e4e4e7]">
            <p class="text-base font-normal text-[#181818] leading-[1.45] whitespace-pre-wrap">{{ email.body }}</p>
          </div>

          <!-- Reply area -->
          <div class="flex flex-col gap-5 p-4">
            <div class="flex items-start px-4 py-5 h-[78px] border border-[#e4e4e7] rounded-lg">
              <span class="text-sm font-normal text-[#181818]">Reply {{ email.from.name }}...</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <kw-toggle [checked]="false" label="" />
                <span class="text-sm font-normal text-[#181818]">Mute this thread</span>
              </div>
              <button class="flex items-center justify-center px-3 py-2 bg-[#18181b] rounded-lg">
                <span class="text-sm font-normal text-white tracking-[-0.28px]">Send</span>
              </button>
            </div>
          </div>
        } @else {
          <div class="flex items-center justify-center flex-1 text-[#71717a]">
            Select an email to view
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100vh; }
  `],
})
export class InboxPageComponent {
  protected readonly emailService = inject(EmailService);

  activeTab = signal<string>('All mail');

  activeTitle = computed(() => {
    const folder = this.emailService.folders().find(
      f => f.id === this.emailService.activeFolder()
    );
    return folder?.name ?? 'Inbox';
  });

  onFolderSelect(folderId: string): void {
    this.emailService.selectFolder(folderId as FolderType);
  }

  onTabChange(tab: string): void {
    this.activeTab.set(tab);
    this.emailService.setUnreadFilter(tab === 'Unread');
  }

  onEmailSelect(emailId: string): void {
    this.emailService.selectEmail(emailId);
  }
}
