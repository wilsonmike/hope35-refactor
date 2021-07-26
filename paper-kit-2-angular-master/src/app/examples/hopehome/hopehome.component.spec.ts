import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopehomeComponent } from './hopehome.component';

describe('HopehomeComponent', () => {
  let component: HopehomeComponent;
  let fixture: ComponentFixture<HopehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
