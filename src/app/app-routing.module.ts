import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewsComponent } from './views/views.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { VendorsRegisterComponent } from './vendors-register/vendors-register.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenComponent } from './men/men.component';
import { FashionComponent } from './fashion/fashion.component';
import { WomenComponent } from './women/women.component';
import { HomeApllComponent } from './home-apll/home-apll.component';
import { IcseComponent } from './icse/icse.component';
import { CbseComponent } from './cbse/cbse.component';
import { JeeComponent } from './jee/jee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'views', component: ViewsComponent },
  {path: 'user_register', component: UserRegisterComponent},
  {path: 'user_login', component: UserLoginComponent},
  {path: 'user_profile', component: UserProfileComponent},
  {path: 'vendor_register', component: VendorsRegisterComponent},
  {path: 'vendor_login', component: VendorLoginComponent},
  {path: 'vendor_profile', component: VendorProfileComponent},
  {path:'electronics', component:ElectronicsComponent},
  {path:'fashion',component:FashionComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'icse',component:IcseComponent},
  {path:'cbse',component:CbseComponent},
  {path:'jee',component:JeeComponent},
  {path:'home_apll',component:HomeApllComponent},


  { path: '404', component: NotFoundComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: ':key', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
