import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutMeComponent } from './more-about-me.component';

describe('MoreAboutMeComponent', () => {
  let component: MoreAboutMeComponent;
  let fixture: ComponentFixture<MoreAboutMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreAboutMeComponent]
    });
    fixture = TestBed.createComponent(MoreAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
