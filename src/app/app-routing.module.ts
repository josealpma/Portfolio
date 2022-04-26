import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Views/about/about.component';
import { ContactComponent } from './Views/contact/contact.component';
import { HomeComponent } from './Views/home/home.component';
import { PortfolioComponent } from './Views/portfolio/portfolio.component';
import { ResumeComponent } from './Views/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
