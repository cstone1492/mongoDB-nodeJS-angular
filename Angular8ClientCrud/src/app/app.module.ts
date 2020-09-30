import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDieSetComponent } from './components/add-die-set/add-die-set.component';
import { DetailsComponent } from './components/die-set/details/details.component';
import { DieSetsListComponent } from './components/die-sets-list/die-sets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDieSetComponent,
    DetailsComponent,
    DieSetsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
