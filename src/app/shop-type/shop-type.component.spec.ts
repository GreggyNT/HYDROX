import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTypeComponent } from './shop-type.component';

describe('ShopTypeComponent', () => {
  let component: ShopTypeComponent;
  let fixture: ComponentFixture<ShopTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
