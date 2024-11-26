import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardHomeComponent } from './admindashboard-home.component';

describe('AdmindashboardHomeComponent', () => {
  let component: AdmindashboardHomeComponent;
  let fixture: ComponentFixture<AdmindashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindashboardHomeComponent]
    });
    fixture = TestBed.createComponent(AdmindashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
