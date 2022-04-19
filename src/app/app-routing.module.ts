import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AppComponent } from './app.component';
import {LandingComponent} from './landing/landing.component'

const routes: Routes = [
  // { path: 'app', component: AppComponent },
  {path:'',component:BodyComponent},
  { path: 'body', component: BodyComponent },
  {path:'landing',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
