import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

import { Puppie } from './puppie.model';


@Injectable({ providedIn: 'root'})
export class PuppiesService{

  puppies: Puppie[] = [];

  constructor(private http: HttpClient){}


  getPuppies() {
          return this.http.get<Puppie[]>('https://www.petlandflorida.com/wp-json/petland/v1/available-puppies/')
          .pipe(map((data: any) => {
            this.puppies = data.puppies
             return this.puppies
            }
          ),
             catchError(error => {
               return throwError('PuppiesService Error', error)
             })
       );
  }
}
