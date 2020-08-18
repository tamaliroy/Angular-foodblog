import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodblogContentComponent } from './components/foodblog-content/foodblog-content.component';


const routes: Routes = [
  { path: 'food-blog', component: FoodblogContentComponent },
  { path: '',   redirectTo: '/food-blog', pathMatch: 'full' }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
