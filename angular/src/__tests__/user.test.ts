import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from '../user';

describe('UserComponent', () => {

  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });

    fixture = TestBed.createComponent(UserComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('renders correctly', () => {
    comp.firstName = 'John';
    comp.lastName = 'Doe';
    fixture.detectChanges();
    expect(el.querySelector('.user-fullname').textContent).toContain('John Doe');
  });
});
