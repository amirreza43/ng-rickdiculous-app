import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { EpDetailComponent } from './components/ep-detail/ep-detail.component';
import { EpContainerComponent } from './components/ep-container/ep-container.component';

const routes = [
  { path:'episodes/:episodeId', component: EpDetailComponent },
  { path:'', component: EpContainerComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
