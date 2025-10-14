import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getapi } from './getapi';

describe('Getapi', () => {
  let component: Getapi;
  let fixture: ComponentFixture<Getapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
