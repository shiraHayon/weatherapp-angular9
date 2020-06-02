import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import {TodayWeatherItemComponent} from './components/today-weather-item/today-weather-item.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ForecastWeatherItemComponent } from './components/forecast-weather-item/forecast-weather-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TodayWeatherItemComponent,
    WeatherComponent,
    ForecastWeatherItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
