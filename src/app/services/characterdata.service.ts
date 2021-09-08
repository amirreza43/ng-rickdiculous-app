import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterdataService {

  constructor(private httpClient: HttpClient) {

   }
   getCharacter(url: string){
    return this.httpClient.get(url);

   }


}
