import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { AboutComponent } from './Views/about/about.component';
import { PortfolioComponent } from './Views/portfolio/portfolio.component';
import { ContactComponent } from './Views/contact/contact.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { LayoutComponent } from './Components/Shared/layout/layout.component';
import { ResumeComponent } from './Views/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
