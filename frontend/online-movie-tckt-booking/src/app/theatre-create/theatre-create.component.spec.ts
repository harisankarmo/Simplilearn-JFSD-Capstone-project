import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreCreateComponent } from './theatre-create.component';

describe('TheatreCreateComponent', () => {
  let component: TheatreCreateComponent;
  let fixture: ComponentFixture<TheatreCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheatreCreateComponent]
    });
    fixture = TestBed.createComponent(TheatreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
