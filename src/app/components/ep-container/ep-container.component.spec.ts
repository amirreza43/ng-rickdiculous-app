import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpContainerComponent } from './ep-container.component';

describe('EpContainerComponent', () => {
  let component: EpContainerComponent;
  let fixture: ComponentFixture<EpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpContainerComponent ]
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
});
