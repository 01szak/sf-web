import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRevealComponent } from './auto-reveal-component';

describe('AutoRevealComponent', () => {
  let component: AutoRevealComponent;
  let fixture: ComponentFixture<AutoRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoRevealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoRevealComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
