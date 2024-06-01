import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchMeComponent } from './search-me/search-me.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchMeComponent, HomeModule, BrowserAnimationsModule, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
