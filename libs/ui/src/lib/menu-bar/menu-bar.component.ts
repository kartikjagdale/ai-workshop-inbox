import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { IconComponent } from '../icon/icon.component';

export interface MenuFolder {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

@Component({
  selector: 'kw-menu-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MenuItemComponent, IconComponent],
  template: `
    <aside class="w-[288px] h-full bg-white border-r-[1.5px] border-[#e8e8ea] flex flex-col gap-[18px] p-2 overflow-hidden">
      <!-- User header -->
      <div class="flex items-center justify-between h-10 px-3 border border-[#e4e4e7] rounded-lg">
        <span class="flex items-center gap-4">
          <kw-icon name="gmail" [size]="20" />
          <span class="text-base font-normal text-[#18181b]">{{ userName() }}</span>
        </span>
      </div>

      <!-- Folders -->
      <div class="flex flex-col gap-1">
        @for (folder of folders(); track folder.id) {
          <kw-menu-item
            [icon]="folder.icon"
            [label]="folder.name"
            [count]="folder.count"
            [active]="folder.id === activeId()"
            (itemSelect)="folderSelect.emit(folder.id)"
          />
        }
      </div>

      <!-- Categories -->
      @if (categories().length > 0) {
        <div class="flex flex-col gap-1">
          @for (cat of categories(); track cat.id) {
            <kw-menu-item
              [icon]="cat.icon"
              [label]="cat.name"
              [count]="cat.count"
              (itemSelect)="categorySelect.emit(cat.id)"
            />
          }
        </div>
      }
    </aside>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `],
})
export class MenuBarComponent {
  userName = input.required<string>();
  folders = input.required<MenuFolder[]>();
  categories = input<MenuCategory[]>([]);
  activeId = input<string>('inbox');

  folderSelect = output<string>();
  categorySelect = output<string>();
}
