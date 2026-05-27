import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type TagVariant = 'selected' | 'default' | 'outline';

@Component({
  selector: 'kw-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex items-center justify-center px-3 py-0.5 rounded-lg text-sm font-medium whitespace-nowrap"
      [class.bg-[#181818]]="variant() === 'selected'"
      [class.text-white]="variant() === 'selected'"
      [class.bg-[#f4f4f5]]="variant() === 'default'"
      [class.text-[#181818]]="variant() !== 'selected'"
      [class.bg-white]="variant() === 'outline'"
      [class.border]="variant() === 'outline'"
      [class.border-[#e4e4e7]]="variant() === 'outline'"
    >
      {{ label() }}
    </span>
  `,
  styles: [`
    :host { display: inline-block; }
  `],
})
export class TagComponent {
  label = input.required<string>();
  variant = input<TagVariant>('default');
}
