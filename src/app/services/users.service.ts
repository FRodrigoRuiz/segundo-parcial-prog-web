import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private urlApi = "https://jsonplaceholder.typicode.com/users";

  login(email: string, lat: string){
    return this.http.get<any[]>(this.urlApi)
    .pipe(
      map((users: any[]) => {
        const user = users.find(u => u.email === email && u.address.geo.lat === lat);
        return user ? true : false;
      })
    );
  }
}
