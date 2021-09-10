import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { EpDetailComponent } from './ep-detail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AppRoutingModule } from '../../app-routing.module';
import { ApiDataService } from 'src/app/services/api-data.service';
import { of } from 'rxjs'

import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule, Routes} from "@angular/router";
import { CharacterdataService } from 'src/app/services/characterdata.service';

describe('EpDetailComponent', () => {
  let component: EpDetailComponent;
  let fixture: ComponentFixture<EpDetailComponent>;
  let mockService;
  let mockCharacterService;
  let location: Location;
  let router: Router;
  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['getById']);
    mockService.getById.and.returnValue(
      of(
        {"id":1,"name":"Pilot","air_date":"December 2, 2013","episode":"S01E01","characters":["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/35","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/62","https://rickandmortyapi.com/api/character/92","https://rickandmortyapi.com/api/character/127","https://rickandmortyapi.com/api/character/144","https://rickandmortyapi.com/api/character/158","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/179","https://rickandmortyapi.com/api/character/181","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/249","https://rickandmortyapi.com/api/character/271","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/394","https://rickandmortyapi.com/api/character/395","https://rickandmortyapi.com/api/character/435"],"url":"https://rickandmortyapi.com/api/episode/1","created":"2017-11-10T12:56:33.798Z"}
        )
        )
    mockCharacterService = jasmine.createSpyObj(['getCharacter']);
    mockCharacterService.getCharacter.and.returnValue(
      of(
          {"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg","episode":["https://rickandmortyapi.com/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/3","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/7","https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/9","https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11","https://rickandmortyapi.com/api/episode/12","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/14","https://rickandmortyapi.com/api/episode/15","https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/17","https://rickandmortyapi.com/api/episode/18","https://rickandmortyapi.com/api/episode/19","https://rickandmortyapi.com/api/episode/20","https://rickandmortyapi.com/api/episode/21","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/23","https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/25","https://rickandmortyapi.com/api/episode/26","https://rickandmortyapi.com/api/episode/27","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/29","https://rickandmortyapi.com/api/episode/30","https://rickandmortyapi.com/api/episode/31","https://rickandmortyapi.com/api/episode/32","https://rickandmortyapi.com/api/episode/33","https://rickandmortyapi.com/api/episode/34","https://rickandmortyapi.com/api/episode/35","https://rickandmortyapi.com/api/episode/36","https://rickandmortyapi.com/api/episode/37","https://rickandmortyapi.com/api/episode/38","https://rickandmortyapi.com/api/episode/39","https://rickandmortyapi.com/api/episode/40","https://rickandmortyapi.com/api/episode/41"],"url":"https://rickandmortyapi.com/api/character/1","created":"2017-11-04T18:48:46.250Z"}
        )
        )
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [ EpDetailComponent ],
      providers: [{provide: ApiDataService, useValue: mockService}, {provide: CharacterdataService, useValue: mockCharacterService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check for parameters', fakeAsync(() => {
    router.navigate(['episodes', 1]);
    tick();
    fixture.detectChanges()
    //make sure the parameter is passed
    expect(location.path()).toEqual('/episodes/1')

    //make sure that the parameter is set correctly in the component
    expect(component.idFromRoute).toEqual(1)

  }));

  it('check the validity of the info array', fakeAsync(() => {
    router.navigate(['episodes', 1]);
    tick();
    fixture.detectChanges()

    expect(component.info.name).toEqual('Pilot')


  }));
  it('check the validity of getCharacter() response array', fakeAsync(() => {
    router.navigate(['episodes', 1]);
    tick();
    fixture.detectChanges()

    expect(component.characterInfo[0].name).toEqual('Rick Sanchez')


  }));
});
