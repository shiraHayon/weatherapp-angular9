import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IWeatherItem} from '../interfaces/ITodayWeatherItem';

@Component({
  selector: 'app-today-weather-item',
  templateUrl: './today-weather-item.component.html',
  styleUrls: ['./today-weather-item.component.scss']
})
export class TodayWeatherItemComponent implements OnInit, OnDestroy {

  @Input() todayWeather:IWeatherItem;

  constructor() {}


  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

}
