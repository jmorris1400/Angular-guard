import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component'
import { canDeactivateGuard } from './can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'enroll', 
    component: EnrollmentformComponent,
    canDeactivate: [canDeactivateGuard] 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrollmentformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [canDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
