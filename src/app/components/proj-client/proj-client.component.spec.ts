import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjClientComponent } from './proj-client.component';

describe('ProjClientComponent', () => {
  let component: ProjClientComponent;
  let fixture: ComponentFixture<ProjClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
