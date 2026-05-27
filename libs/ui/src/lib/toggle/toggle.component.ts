import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'kw-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      role="switch"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="label() || 'Toggle'"
      class="relative inline-flex h-[22px] w-10 items-center rounded-[100px] transition-colors"
      [class.bg-[#18181b]]="checked()"
      [class.bg-[#e4e4e7]]="!checked()"
      (click)="toggled.emit(!checked())"
    >
      <span
        class="inline-block size-[18px] rounded-[100px] bg-white transition-transform"
        [class.translate-x-[20px]]="checked()"
        [class.translate-x-[2px]]="!checked()"
      ></span>
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
  `],
})
export class ToggleComponent {
  checked = input<boolean>(false);
  label = input<string>('');
  toggled = output<boolean>();
}
