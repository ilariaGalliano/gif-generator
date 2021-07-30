import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container text-center">
        <h1>Welcome to the home of gif generator!</h1>

        <p>Serch for the best gifs on this page.</p>

        <span>Have fun! &hearts; </span>

        
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
