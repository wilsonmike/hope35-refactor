import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyfriendsComponent } from './familyfriends.component';

describe('FamilyfriendsComponent', () => {
  let component: FamilyfriendsComponent;
  let fixture: ComponentFixture<FamilyfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyfriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
