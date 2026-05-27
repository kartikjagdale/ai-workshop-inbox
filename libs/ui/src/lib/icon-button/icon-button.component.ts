import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'kw-icon-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <button
      class="flex items-center justify-center size-[38px] rounded-lg bg-white hover:bg-[#f4f4f5] transition-colors"
      [attr.aria-label]="ariaLabel()"
      (click)="buttonClick.emit()"
    >
      <kw-icon [name]="icon()" [size]="20" />
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
  `],
})
export class IconButtonComponent {
  icon = input.required<string>();
  ariaLabel = input<string>('');
  buttonClick = output<void>();
}
