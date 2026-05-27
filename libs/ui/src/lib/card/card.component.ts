import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export interface CardEmail {
  id: string;
  from: { name: string; email: string };
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  labels: { name: string; color: string }[];
}

@Component({
  selector: 'kw-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="p-4 border-b border-gray-200 cursor-pointer transition-colors hover:bg-gray-50"
      [class.bg-blue-50]="!email().read"
      (click)="select.emit(email().id)"
    >
      <div class="flex justify-between items-center mb-1">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-sm">{{ email().from.name }}</span>
          @if (!email().read) {
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
          }
        </div>
        <span class="text-xs text-gray-500">{{ relativeTime() }}</span>
      </div>
      <div class="text-sm font-medium mb-1">{{ email().subject }}</div>
      <div class="text-sm text-gray-500 truncate">{{ email().preview }}</div>
      @if (email().labels.length > 0) {
        <div class="flex gap-1 mt-2">
          @for (label of email().labels; track label.name) {
            <span class="px-2 py-0.5 rounded text-xs font-medium bg-gray-900 text-white">
              {{ label.name }}
            </span>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class CardComponent {
  email = input.required<CardEmail>();
  select = output<string>();

  relativeTime = computed(() => {
    const date = new Date(this.email().timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 30) return `${days} days ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `about ${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? 's' : ''} ago`;
  });
}
