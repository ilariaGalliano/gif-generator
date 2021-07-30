import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container mt-3">
        <div class="btn-group">
          <button class="btn btn-info"
                  routerLink="home"
                  routerLinkActive="btn-warning"
          >
          Home
          </button>
          <button class="btn btn-info"
                  routerLink="giphy"
                  routerLinkActive="btn-warning"
          >
          Giphy
          </button>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
