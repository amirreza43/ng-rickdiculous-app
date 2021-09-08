import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EpContainerComponent } from './components/ep-container/ep-container.component';
import { EpDetailComponent } from './components/ep-detail/ep-detail.component';
import { ApiDataService } from './services/api-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EpContainerComponent,
    EpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
