import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getTodayWeather(id:string, number:number): Observable<any>{
    const headers = {'secret-key':'$2b$10$DLiB/Lat5GN7MB1D1oYanOEUpkQndJNuX8ZCt8GlkCRLWCGEb26e6'};
    return this.http.get(`https://api.jsonbin.io/b/${id}/${number}`, {headers:headers})

  }

  getForecastWeather(id:string, number:number): Observable<any>{
    const headers = {'secret-key':'$2b$10$DLiB/Lat5GN7MB1D1oYanOEUpkQndJNuX8ZCt8GlkCRLWCGEb26e6'};
    return this.http.get(`https://api.jsonbin.io/b/${id}/${number}`, {headers:headers})

  }
}
