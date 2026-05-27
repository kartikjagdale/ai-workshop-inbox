import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'kw-tab-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="inline-flex gap-[3px] items-center p-1 bg-[#f3f3f4] rounded-[9px]">
      @for (tab of tabs(); track tab) {
        <button
          class="h-[30px] px-4 py-1.5 rounded-lg text-sm transition-colors"
          [class.bg-white]="tab === activeTab()"
          [class.shadow-sm]="tab === activeTab()"
          [class.font-medium]="tab === activeTab()"
          [class.text-[#181818]]="tab === activeTab()"
          [class.font-normal]="tab !== activeTab()"
          [class.text-[#52525b]]="tab !== activeTab()"
          (click)="tabChange.emit(tab)"
        >
          {{ tab }}
        </button>
      }
    </div>
  `,
  styles: [`
    :host { display: inline-block; }
  `],
})
export class TabButtonComponent {
  tabs = input.required<string[]>();
  activeTab = input<string>('');
  tabChange = output<string>();
}
