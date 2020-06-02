export interface IWeatherItem {
  description:IDescription;
  temp:ITemp;
  location:string;
}

export interface IDescription {
  id: number;
  main: string;
  description:string;
  icon: string;
}

export interface ITemp {
  feels_like:number;
  humidity:number;
  pressure:number;
  temp:number;
  temp_max:number;
  temp_min:number;
}
