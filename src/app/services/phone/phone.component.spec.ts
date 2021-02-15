import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PhoneService} from './phone.service';


describe('PhoneComponent', () => {
  let component: PhoneService;
  let fixture: ComponentFixture<PhoneService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
