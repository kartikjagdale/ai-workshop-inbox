import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TagComponent, TagVariant } from '../tag/tag.component';

export interface CardEmail {
  id: string;
  from: { name: string; email: string };
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  labels: { name: string; variant: TagVariant }[];
}

@Component({
  selector: 'kw-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TagComponent],
  template: `
    <button
      class="flex flex-col gap-2 items-start p-4 rounded-lg border border-[#e4e4e7] w-full text-left transition-colors"
      [class.bg-[#f4f4f5]]="selected()"
      [class.bg-white]="!selected()"
      (click)="cardSelect.emit(email().id)"
    >
      <div class="flex items-center justify-between w-full whitespace-nowrap">
        <span class="flex items-center gap-3">
          <span class="text-base font-semibold text-[#18181b]">{{ email().from.name }}</span>
          @if (!email().read) {
            <span class="size-2 rounded-full bg-[#2563eb]"></span>
          }
        </span>
        <span class="text-xs font-normal text-[#71717a]">{{ email().timestamp }}</span>
      </div>
      <span class="text-xs font-normal text-[#181818]">{{ email().subject }}</span>
      <span class="text-sm font-normal text-[#71717a] overflow-hidden text-ellipsis w-full line-clamp-2">{{ email().preview }}</span>
      @if (email().labels.length > 0) {
        <span class="flex gap-2 items-center">
          @for (label of email().labels; track label.name) {
            <kw-tag [label]="label.name" [variant]="label.variant" />
          }
        </span>
      }
    </button>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class CardComponent {
  email = input.required<CardEmail>();
  selected = input<boolean>(false);
  cardSelect = output<string>();
}
