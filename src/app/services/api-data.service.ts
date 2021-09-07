import { Injectable } from '@angular/core';
import { EpisodeData } from '../models/EpisodeData';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  data;

  getAllEpisodes(pageNumber: number): Observable<any>{

  return this.http.get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)

  }

  getById(id: number){

  }

  getByName(name?: string, seasonEpisode?: string){

  }

}
