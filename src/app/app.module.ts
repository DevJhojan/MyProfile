import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchMeComponent } from './search-me/search-me.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchMeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
