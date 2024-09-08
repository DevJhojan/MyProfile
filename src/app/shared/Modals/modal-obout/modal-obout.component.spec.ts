import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOboutComponent } from './modal-obout.component';

describe('ModalOboutComponent', () => {
  let component: ModalOboutComponent;
  let fixture: ComponentFixture<ModalOboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalOboutComponent]
    });
    fixture = TestBed.createComponent(ModalOboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
