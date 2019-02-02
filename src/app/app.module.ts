import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CowComponent } from './cow/cow.component';
import { AnyAnimalComponent } from './any-animal/any-animal.component';
import { LionComponent } from './lion/lion.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    CowComponent,
    AnyAnimalComponent,
    LionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
