import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { IntroModule } from './intro/intro.module';
import { WorkboardModule } from './workboard/workboard.module';
import { AppdataService } from './shared/service/appdata.service';
import { AppmessageService } from './shared/service/appmessage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule,
    WorkboardModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppdataService,
              AppmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
