import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontMovieListingComponent } from './front-movie-listing.component';

describe('FrontMovieListingComponent', () => {
  let component: FrontMovieListingComponent;
  let fixture: ComponentFixture<FrontMovieListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontMovieListingComponent]
    });
    fixture = TestBed.createComponent(FrontMovieListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
