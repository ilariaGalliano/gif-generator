import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
        <app-navbar></app-navbar>
        <hr>
        <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'gif-animals';
}
