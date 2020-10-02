import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsRegisterComponent } from './vendors-register.component';

describe('VendorsRegisterComponent', () => {
  let component: VendorsRegisterComponent;
  let fixture: ComponentFixture<VendorsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
