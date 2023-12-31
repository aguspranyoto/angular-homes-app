import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, provideRouter } from '@angular/router';
import routeConfig from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeComponent, AppRoutingModule, RouterModule],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent],
})
export class AppModule {}
