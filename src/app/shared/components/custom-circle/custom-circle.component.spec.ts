import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCircleComponent } from './custom-circle.component';

describe('CustomCircleComponent', () => {
  let component: CustomCircleComponent;
  let fixture: ComponentFixture<CustomCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
