import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpContainerComponent } from './ep-container.component';
import { ApiDataService } from '../../services/api-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { of } from 'rxjs';

describe('EpContainerComponent', () => {
  let component: EpContainerComponent;
  let fixture: ComponentFixture<EpContainerComponent>;
  let mockService;
  const res: {} = { info: {}, results: [
    {"id":1,"name":"Pilot","air_date":"December 2, 2013","episode":"S01E01","characters":["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/35","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/62","https://rickandmortyapi.com/api/character/92","https://rickandmortyapi.com/api/character/127","https://rickandmortyapi.com/api/character/144","https://rickandmortyapi.com/api/character/158","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/179","https://rickandmortyapi.com/api/character/181","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/249","https://rickandmortyapi.com/api/character/271","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/394","https://rickandmortyapi.com/api/character/395","https://rickandmortyapi.com/api/character/435"],"url":"https://rickandmortyapi.com/api/episode/1","created":"2017-11-10T12:56:33.798Z"}
   ] }

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['getAllEpisodes']);
    mockService.getAllEpisodes.and.returnValue(
      of(res)
    )


    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ EpContainerComponent ],
      providers: [{ provide: ApiDataService, useValue: mockService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check for the validity of data array after getAllEpisodes() is called', () => {
    fixture.detectChanges();
    expect(component.data[0][0].name).toEqual('Pilot')

  });
});
