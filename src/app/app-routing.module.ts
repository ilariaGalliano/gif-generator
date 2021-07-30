import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyComponent } from './views/giphy/giphy.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'giphy', component: GiphyComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
