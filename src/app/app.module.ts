import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
 import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

//decorator transforms module into something else
@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  //bootstrap array
  bootstrap: [AppComponent]
  
})
export class AppModule { }

//modules are used to bundles of functionalities of the app
//empty typescript class

