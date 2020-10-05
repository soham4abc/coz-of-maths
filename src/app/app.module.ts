import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewsComponent } from './views/views.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { VendorsRegisterComponent } from './vendors-register/vendors-register.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HomeApllComponent } from './home-apll/home-apll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListComponent,
    AboutComponent,
    ArticleComponent,
    NotFoundComponent,
    ViewsComponent,
    UserRegisterComponent,
    UserLoginComponent,
    VendorsRegisterComponent,
    VendorLoginComponent,
    UserProfileComponent,
    VendorProfileComponent,
    ElectronicsComponent,
    FashionComponent,
    MenComponent,
    WomenComponent,
    HomeApllComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
