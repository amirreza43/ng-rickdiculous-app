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

  getEpisodeByPage(pageNumber: number): Observable<any>{

  return this.http.get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)

  }

  getById(id: number): Observable<any>{

    return this.http.get(`https://rickandmortyapi.com/api/episode/${id}`)
  }

  getByName(name?: string): Observable<any>{
    return this.http.get(`https://rickandmortyapi.com/api/episode?name=${name}`)
  }

  getAllEpisodes(): Observable<any>{
    this.getEpisodeByPage(1).subscribe((res)=>{

      // this.data.push(res.results)
      res.results.map((episode)=> {
        this.data.push(episode)
      })
      console.log(res.results);

    }, (err)=>{
      console.log(err);
    })
    this.getEpisodeByPage(2).subscribe((res)=>{

      // this.data.push(res.results)

      res.results.map((episode)=> {
        this.data.push(episode)
      })


    }, (err)=>{
      console.log(err);
    })
    this.getEpisodeByPage(3).subscribe((res)=>{

      // this.data.push(res.results)

      console.log(this.results, 'results in the service');
      res.results.map((episode)=> {
        this.data.push(episode)
      })

    }, (err)=>{
      console.log(err);
    })

    return of(this.data)
  }


}
