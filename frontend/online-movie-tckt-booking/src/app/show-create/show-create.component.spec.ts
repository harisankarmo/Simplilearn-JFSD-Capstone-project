import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreateComponent } from './show-create.component';

describe('ShowCreateComponent', () => {
  let component: ShowCreateComponent;
  let fixture: ComponentFixture<ShowCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCreateComponent]
    });
    fixture = TestBed.createComponent(ShowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
