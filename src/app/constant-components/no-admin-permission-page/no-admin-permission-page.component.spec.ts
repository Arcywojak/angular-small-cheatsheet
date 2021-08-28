import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAdminPermissionPageComponent } from './no-admin-permission-page.component';

describe('NoAdminPermissionPageComponent', () => {
  let component: NoAdminPermissionPageComponent;
  let fixture: ComponentFixture<NoAdminPermissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAdminPermissionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAdminPermissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
