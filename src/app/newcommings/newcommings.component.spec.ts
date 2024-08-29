import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcommingsComponent } from './newcommings.component';

describe('NewcommingsComponent', () => {
  let component: NewcommingsComponent;
  let fixture: ComponentFixture<NewcommingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewcommingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcommingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
