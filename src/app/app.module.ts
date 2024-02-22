import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchMeComponent } from './search-me/search-me.component';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchMeComponent, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
