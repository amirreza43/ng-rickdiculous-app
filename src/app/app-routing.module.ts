import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { EpDetailComponent } from './components/ep-detail/ep-detail.component';

const routes = [
  { path:'episodes/:epId', component: EpDetailComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
