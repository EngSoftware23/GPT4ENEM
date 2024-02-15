import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowToTopComponent } from './arrow-to-top.component';

describe('ArrowToTopComponent', () => {
  let component: ArrowToTopComponent;
  let fixture: ComponentFixture<ArrowToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowToTopComponent]
    });
    fixture = TestBed.createComponent(ArrowToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
