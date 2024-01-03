import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitToTextComponent } from './digit-to-text.component';

describe('DigitToTextComponent', () => {
  let component: DigitToTextComponent;
  let fixture: ComponentFixture<DigitToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitToTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
