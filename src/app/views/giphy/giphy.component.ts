import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  debounceTime, distinctUntilChanged, filter
} from 'rxjs/operators';

@Component({
  selector: 'app-giphy',
  template: `
    <div class="container">
     <form [formGroup]="form">
        <input type="text" formControlName="text" class="form-control">
        <select formControlName="total" class="form-control">
            <option value="4">Select: 4</option>
            <option value="8">Select: 8</option>
            <option value="25">Select: 25</option>
        </select>
        <!-- <h1>{{textToSearch}}</h1> -->
        <app-giphy-search [limit]="totalOfImages" [text]="textToSearch"></app-giphy-search>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class GiphyComponent{
  form!: FormGroup;
  textToSearch = 'dogs';
  totalOfImages = 4;  

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: [this.textToSearch, Validators.required],
      total: [this.totalOfImages, Validators.required]    // Handle `total`
    });

    this.form.valueChanges
    .pipe(
      //filter(text => text.length > 2),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(res => {
      this.textToSearch = res.text;
      this.totalOfImages = res.total;
    });
}
}
