import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideAngularModule, LucideIconData, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import {
  Mail, Inbox, File, Send, CircleAlert, Trash2, Archive,
  Users, Clock, MessageSquare, ShoppingCart, Megaphone,
  Search, ChevronLeft, ChevronRight, EllipsisVertical,
  Reply, ReplyAll, Forward,
} from 'lucide-angular/src/icons';

const ICONS = {
  Mail, Inbox, File, Send, CircleAlert, Trash2, Archive,
  Users, Clock, MessageSquare, ShoppingCart, Megaphone,
  Search, ChevronLeft, ChevronRight, EllipsisVertical,
  Reply, ReplyAll, Forward,
};

const NAME_MAP: Record<string, LucideIconData> = {
  gmail: Mail,
  inbox: Inbox,
  drafts: File,
  sent: Send,
  junk: CircleAlert,
  trash: Trash2,
  archive: Archive,
  social: Users,
  updates: Clock,
  forums: MessageSquare,
  shopping: ShoppingCart,
  promotions: Megaphone,
  search: Search,
  clock: Clock,
  'back-arrow': ChevronLeft,
  'next-arrow': ChevronRight,
  '3dots': EllipsisVertical,
  reply: Reply,
  'reply-all': ReplyAll,
  forward: Forward,
};

@Component({
  selector: 'kw-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  providers: [
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(ICONS) },
  ],
  template: `
    <lucide-icon [img]="iconData()" [size]="size()" [strokeWidth]="1.5" />
  `,
  styles: [`
    :host { display: inline-flex; align-items: center; }
  `],
})
export class IconComponent {
  name = input.required<string>();
  size = input<number>(20);

  iconData = computed(() => NAME_MAP[this.name()] ?? Mail);
}
