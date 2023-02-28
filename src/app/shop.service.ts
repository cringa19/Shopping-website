import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../app/common/Country';
import { map } from 'rxjs/operators';
import { State } from '../app/common/State';
import { City } from '../app/common/City';
 
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  public countries : any = [];
  public states : any = [];
  public cities : any = [];
 
  constructor(private httpClient: HttpClient) { }
 
  getCountries(): Observable<Country[]> {
 
    return this.httpClient.get<GetResponseCountries>(this.countries).pipe(
      map(response => response._embedded.countries)
    );
  }
 
  getStates(theCountryCode: string): Observable<State[]> {
 
    // search url
    const searchStatesUrl = `${this.states}/search/findByCountryCode?code=${theCountryCode}`;
 
    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(response => response._embedded.states)
    );
  }
 
  getCities(theStateId: number): Observable<State[]> {
 
    // search url
    const searchCitiesUrl = `${this.cities}/search/findByStateId?id=${theStateId}`;
 
    return this.httpClient.get<GetResponseCities>(searchCitiesUrl).pipe(
      map(response => response._embedded.cities)
    );
  }
 
  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let month: number[] = [];
    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      month.push(theMonth);
    }
    return of(month);
  }
 
  getCreditCardYears(): Observable<number[]> {
    let year: number[] = [];
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 12;
 
    for (let theYear = startYear; theYear <= endYear; theYear++) {
      year.push(theYear);
    }
    return of(year);
  }
}
 
interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  }
}
 
interface GetResponseStates {
  _embedded: {
    states: State[];
  }
}
 
interface GetResponseCities {
  _embedded: {
    cities: City[];
  }
}
 

