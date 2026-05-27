import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'kw-root',
  template: `
    <div class="flex items-center justify-center h-screen bg-gray-50">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900">Kiteworks Inbox</h1>
        <p class="mt-2 text-gray-500">Coming soon</p>
      </div>
    </div>
  `,
  styles: [],
})
export class App {}
