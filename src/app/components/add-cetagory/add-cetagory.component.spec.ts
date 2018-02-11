import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCetagoryComponent } from './add-cetagory.component';

describe('AddCetagoryComponent', () => {
  let component: AddCetagoryComponent;
  let fixture: ComponentFixture<AddCetagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCetagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCetagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
