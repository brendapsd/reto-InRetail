import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewClientComponent } from './form-new-client.component';

describe('FormNewClientComponent', () => {
  let component: FormNewClientComponent;
  let fixture: ComponentFixture<FormNewClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
