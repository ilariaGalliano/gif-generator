import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-giphy-search',
  template: `
    <div class="container">
        <!-- <pre>{{result | json}}</pre> -->
        <span *ngFor="let item of result.data">
          <a [href]="item.images.downsized_large.url" target="_blank">
            <img class="mt-3" [src]="item.images.fixed_height.url">
          </a>
        </span>

        <hr>
        <button class="btn btn-primary" (click)="next()">next</button>

        <h2 *ngIf="!result.data.length">No results</h2>
    </div>
    
  `,
  styles: [
  ]
})
export class GiphySearchComponent implements OnChanges {
  @Input() text: string | undefined;
  result: any;
  url = 'https://api.giphy.com/v1/gifs/search';     
  token = 'IWaERSvJMuo7TRDnFHui9u8lt3cmL7QT';   
  
  @Input() limit = 4;      // total of gif to display at once
  offset = 0;       // current offset (used from API)
  pageCounter = 0;  // current page

  constructor( private http: HttpClient ) {} 

  ngOnChanges(changes: SimpleChanges) {
    const { text } = changes;
    // this.search(text.currentValue); 
    this.search(this.text!);           
  }

  // Invoke Giphy API (get only 4 images)   
  search( text: string) {
   //this.http.get(`${this.url}?api_key=${this.token}&q=${text}&offset=0&limit=4`)
   this.http.get(`${this.url}?api_key=${this.token}&q=${text}&offset=${this.offset}&limit=${this.limit}`)
   .subscribe(res => {
     this.result = res;
     //console.log(res);
   });
  }

  next() {
    // get current offset from Giphy API result
    const offset = this.result.pagination.offset;
    // get total of images from Giphy API result
    const total = this.result.pagination.total_count;
    // set current page (if there are no more images, set to 0)
    this.pageCounter = (this.limit * offset < total) ? ++this.pageCounter : 0;
    // set next offset and pass to Giphy API
    this.offset = this.pageCounter * this.limit;
    // refresh search
    this.search(this.text!);
  }

  

}
