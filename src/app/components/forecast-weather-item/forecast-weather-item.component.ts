import {Component, Input, OnInit} from '@angular/core';
import {IWeatherItem} from '../interfaces/ITodayWeatherItem';

@Component({
  selector: 'app-forecast-weather-item',
  templateUrl: './forecast-weather-item.component.html',
  styleUrls: ['./forecast-weather-item.component.scss']
})
export class ForecastWeatherItemComponent implements OnInit {

  @Input() forecast:IWeatherItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
