import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduitComponent } from './aduit.component';

describe('AduitComponent', () => {
  let component: AduitComponent;
  let fixture: ComponentFixture<AduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
