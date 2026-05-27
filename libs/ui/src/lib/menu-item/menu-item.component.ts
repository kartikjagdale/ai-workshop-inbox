import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'kw-menu-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <button
      class="flex items-center justify-between w-full h-10 px-3 rounded-lg text-base transition-colors"
      [class.bg-[#18181b]]="active()"
      [class.text-white]="active()"
      [class.bg-white]="!active()"
      [class.text-[#18181b]]="!active()"
      (click)="itemSelect.emit()"
    >
      <span class="flex items-center gap-4">
        <kw-icon [name]="icon()" [size]="20" />
        <span class="font-normal">{{ label() }}</span>
      </span>
      @if (count() !== undefined) {
        <span class="font-normal">{{ count() }}</span>
      }
    </button>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class MenuItemComponent {
  icon = input.required<string>();
  label = input.required<string>();
  count = input<number>();
  active = input<boolean>(false);
  itemSelect = output<void>();
}
