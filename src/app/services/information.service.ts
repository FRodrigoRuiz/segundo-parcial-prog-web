import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  private genderUrlApi = "https://api.genderize.io/?name=";
  private nationalizeUrlApi = "https://api.nationalize.io/?name=";

  determineGender(name: string) {
    return this.http.get<any>(this.genderUrlApi + name);
  }

  determineNationality(name: string) {
    return this.http.get<any>(this.nationalizeUrlApi + name);
  }

}
