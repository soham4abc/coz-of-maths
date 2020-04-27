import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';


const routes: Routes = [
  { path :'articles',component: ArticleListComponent},
  {path:'about', component:ArticleListComponent},
  { path :'',component: ArticleListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
