import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardActionPage } from './card-action.page';

describe('CardActionPage', () => {
  let component: CardActionPage;
  let fixture: ComponentFixture<CardActionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
