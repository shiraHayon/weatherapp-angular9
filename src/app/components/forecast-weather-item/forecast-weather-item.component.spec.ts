import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherItemComponent } from './forecast-weather-item.component';

describe('ForecastWeatherItemComponent', () => {
  let component: ForecastWeatherItemComponent;
  let fixture: ComponentFixture<ForecastWeatherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWeatherItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
