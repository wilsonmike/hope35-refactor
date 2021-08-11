import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainformControllerComponent } from './mainform-controller.component';

describe('MainformControllerComponent', () => {
  let component: MainformControllerComponent;
  let fixture: ComponentFixture<MainformControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainformControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainformControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
