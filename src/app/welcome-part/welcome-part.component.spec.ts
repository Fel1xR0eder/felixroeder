import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePartComponent } from './welcome-part.component';

describe('WelcomePartComponent', () => {
  let component: WelcomePartComponent;
  let fixture: ComponentFixture<WelcomePartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePartComponent]
    });
    fixture = TestBed.createComponent(WelcomePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
