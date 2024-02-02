import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceResultComponent } from './service-result.component';

describe('ServiceResultComponent', () => {
  let component: ServiceResultComponent;
  let fixture: ComponentFixture<ServiceResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceResultComponent]
    });
    fixture = TestBed.createComponent(ServiceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
