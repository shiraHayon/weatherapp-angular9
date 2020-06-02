import {Component, OnDestroy, OnInit} from '@angular/core';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit,OnDestroy {

  private citiesMetadata = [
    {name: 'New York', today: {id: '5e2d895c50a7fe418c5415f2', number: 1}, forecast: {id: '5e2d8b10593fd7418570a644', number: 1}},
    {name: 'London', today: {id: '5e2d89bd593fd7418570a5ac', number: 1}, forecast: {id: '5e2d8bea593fd7418570a697', number: 2}},
    {name: 'Tel Aviv', today: {id: '5e2d84a33d75894195df35c1', number: 2}, forecast: {id: '5e2d76c3593fd74185709ea6', number: 3}}
  ];

  private todayWeather$: Observable<any>;
  private forecastWeather$: Observable<any>;
  private sub$:Subscription;

  todayWeather = [];
  forecastWeather = [];
  backgroundImages = ['src/assets/orange-green.jpg', 'src/assets/light-blue.jpg', 'src/assets/green-blue.jpg'];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    for (let city of this.citiesMetadata) {
      this.todayWeather$ = this.weatherService.getTodayWeather(city.today.id, city.today.number);
      this.forecastWeather$ = this.weatherService.getForecastWeather(city.forecast.id, city.forecast.number);

      const observable = forkJoin([
        this.todayWeather$, this.forecastWeather$
      ]);

      this.sub$= observable.subscribe(
        data => {
          this.todayWeather.push({
            description: data[0].weather[0],
            temp: data[0].main,
            location: data[0].name
          });

          this.forecastWeather.push({
            name: data[1].city.name,
            list: data[1].list.map((item) => {
              return {
                temp: item.temp.day,
                description: item.weather[0].description
              };
            })
          });
        },
        error => {
        },
        () => {
        }
      );

    }


  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
