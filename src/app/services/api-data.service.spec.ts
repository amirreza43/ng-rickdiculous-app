import { fakeAsync, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ApiDataService } from './api-data.service';


//Episode Interface
import { EpisodeData } from '../models/EpisodeData';

const res: {} = { info: {}, results: [ { name: 'test name', episode: 'TESTEP', id: 50, airdate: 'August', characters: [] } ] }

describe('ApiDataService', () => {
  let service: ApiDataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiDataService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Tesing the HttpClient call to RickandMortyApi', () => {

    const mockEpisodeData: EpisodeData = {id:2,name:"Lawnmower Dog",air_date:"December 9, 2013","episode":"S01E02",characters:["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/46","https://rickandmortyapi.com/api/character/63","https://rickandmortyapi.com/api/character/80","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/221","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/246","https://rickandmortyapi.com/api/character/304","https://rickandmortyapi.com/api/character/305","https://rickandmortyapi.com/api/character/306","https://rickandmortyapi.com/api/character/329","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/396","https://rickandmortyapi.com/api/character/397","https://rickandmortyapi.com/api/character/398","https://rickandmortyapi.com/api/character/405"],url:"https://rickandmortyapi.com/api/episode/2",created:"2017-11-10T12:56:33.916Z"}

    httpClient.get('https://rickandmortyapi.com/api/episode/2')
    .subscribe(data =>{
      expect(data).toEqual(mockEpisodeData);
    })
    const req = httpTestingController.expectOne('https://rickandmortyapi.com/api/episode/2');
    expect(req.request.method).toEqual('GET');
    req.flush(mockEpisodeData);
    httpTestingController.verify();

  });
  it('getpisodeByPage() returns a correct array of the episodes', () => {


    const mockEpisodeData: EpisodeData = {id:2,name:"Lawnmower Dog",air_date:"December 9, 2013","episode":"S01E02",characters:["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/46","https://rickandmortyapi.com/api/character/63","https://rickandmortyapi.com/api/character/80","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/221","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/246","https://rickandmortyapi.com/api/character/304","https://rickandmortyapi.com/api/character/305","https://rickandmortyapi.com/api/character/306","https://rickandmortyapi.com/api/character/329","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/396","https://rickandmortyapi.com/api/character/397","https://rickandmortyapi.com/api/character/398","https://rickandmortyapi.com/api/character/405"],url:"https://rickandmortyapi.com/api/episode/2",created:"2017-11-10T12:56:33.916Z"}

    service.getEpisodeByPage(1).subscribe(data => expect(data).toEqual(mockEpisodeData))
    const req = httpTestingController.expectOne('https://rickandmortyapi.com/api/episode?page=1');
    req.flush(mockEpisodeData);
    httpTestingController.verify();

  });
  it('getById(id: number) returns a correct array of episode', () => {


    const mockEpisodeData: EpisodeData = {id:2,name:"Lawnmower Dog",air_date:"December 9, 2013","episode":"S01E02",characters:["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/46","https://rickandmortyapi.com/api/character/63","https://rickandmortyapi.com/api/character/80","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/221","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/246","https://rickandmortyapi.com/api/character/304","https://rickandmortyapi.com/api/character/305","https://rickandmortyapi.com/api/character/306","https://rickandmortyapi.com/api/character/329","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/396","https://rickandmortyapi.com/api/character/397","https://rickandmortyapi.com/api/character/398","https://rickandmortyapi.com/api/character/405"],url:"https://rickandmortyapi.com/api/episode/2",created:"2017-11-10T12:56:33.916Z"}

    service.getById(2).subscribe((data) => {
      console.log('inside of subscribe', data);

      expect(data).toEqual(mockEpisodeData)

    })
    const req = httpTestingController.expectOne('https://rickandmortyapi.com/api/episode/2');
    req.flush(mockEpisodeData);
    httpTestingController.verify();



  });
  it('getByName() returns a correct array of episode', () => {


    const mockEpisodeData: EpisodeData = {id:2,name:"Lawnmower Dog",air_date:"December 9, 2013","episode":"S01E02",characters:["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/46","https://rickandmortyapi.com/api/character/63","https://rickandmortyapi.com/api/character/80","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/221","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/246","https://rickandmortyapi.com/api/character/304","https://rickandmortyapi.com/api/character/305","https://rickandmortyapi.com/api/character/306","https://rickandmortyapi.com/api/character/329","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/396","https://rickandmortyapi.com/api/character/397","https://rickandmortyapi.com/api/character/398","https://rickandmortyapi.com/api/character/405"],url:"https://rickandmortyapi.com/api/episode/2",created:"2017-11-10T12:56:33.916Z"}

    service.getByName('Lawnmower Dog').subscribe(
      data => {
        console.log(data);

        expect(data).toEqual(mockEpisodeData)
      }
    )

    const req = httpTestingController.expectOne('https://rickandmortyapi.com/api/episode?name=Lawnmower Dog');
    req.flush(mockEpisodeData);
    httpTestingController.verify();

  });


});
