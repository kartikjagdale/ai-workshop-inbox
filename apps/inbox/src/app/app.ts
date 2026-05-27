import { Component } from '@angular/core';
import { InboxPageComponent } from '@kw-inbox/feature-inbox';

@Component({
  imports: [InboxPageComponent],
  selector: 'kw-root',
  template: `<kw-feature-inbox-page />`,
  styles: [],
})
export class App {}
