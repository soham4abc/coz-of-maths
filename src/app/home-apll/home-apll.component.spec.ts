import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApllComponent } from './home-apll.component';

describe('HomeApllComponent', () => {
  let component: HomeApllComponent;
  let fixture: ComponentFixture<HomeApllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeApllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
