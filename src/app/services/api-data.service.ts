import { Injectable } from '@angular/core';
import { EpisodeData } from '../models/EpisodeData';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }
  results: EpisodeData[] = [];
  data : EpisodeData[] = [];

  async getEpisodeByPage(pageNumber: number): Promise<Observable<any>>{
    try {
      const res = await this.http.get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`).toPromise()


      return of(res)
    } catch (error) {

    }

  }

  getById(id: number): Observable<any>{

    return this.http.get(`https://rickandmortyapi.com/api/episode/${id}`)
  }

  getByName(name?: string): Observable<any>{
    return this.http.get(`https://rickandmortyapi.com/api/episode?name=${name}`)
  }

  async getAllEpisodes(): Promise<Observable<any>>{

    if(this.data.length === 0){

      const res = (await this.getEpisodeByPage(1)).toPromise()
      console.log(res);


    }

    return of(this.data)
  }

  getAll(): Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/episode/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]')
  }


}
