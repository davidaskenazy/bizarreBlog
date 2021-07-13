import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule} from "@ngrx/store-devtools";
import { Reducer} from "./Reducers/list.reducer";


//Store REDUX
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
      total : Reducer
    }
    ),
    StoreDevtoolsModule.instrument({
      maxAge:10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
