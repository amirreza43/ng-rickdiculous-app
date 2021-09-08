import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { EpDetailComponent } from './ep-detail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AppRoutingModule } from '../../app-routing.module';
import { ApiDataService } from 'src/app/services/api-data.service';
import { of } from 'rxjs'

import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule, Routes} from "@angular/router";

describe('EpDetailComponent', () => {
  let component: EpDetailComponent;
  let fixture: ComponentFixture<EpDetailComponent>;
  let mockService;
  let location: Location;
  let router: Router;
  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['getById']);
    mockService.getById.and.returnValue(
      of(
        {"id":1,"name":"Pilot","air_date":"December 2, 2013","episode":"S01E01","characters":["https://rickandmortyapi.com/api/character/1","https://rickandmortyapi.com/api/character/2","https://rickandmortyapi.com/api/character/35","https://rickandmortyapi.com/api/character/38","https://rickandmortyapi.com/api/character/62","https://rickandmortyapi.com/api/character/92","https://rickandmortyapi.com/api/character/127","https://rickandmortyapi.com/api/character/144","https://rickandmortyapi.com/api/character/158","https://rickandmortyapi.com/api/character/175","https://rickandmortyapi.com/api/character/179","https://rickandmortyapi.com/api/character/181","https://rickandmortyapi.com/api/character/239","https://rickandmortyapi.com/api/character/249","https://rickandmortyapi.com/api/character/271","https://rickandmortyapi.com/api/character/338","https://rickandmortyapi.com/api/character/394","https://rickandmortyapi.com/api/character/395","https://rickandmortyapi.com/api/character/435"],"url":"https://rickandmortyapi.com/api/episode/1","created":"2017-11-10T12:56:33.798Z"}
        )
        )
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [ EpDetailComponent ],
      providers: [{provide: ApiDataService, useValue: mockService}]
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
});
