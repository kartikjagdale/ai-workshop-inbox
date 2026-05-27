import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBarComponent);
    fixture.componentRef.setInput('userName', 'Alicia Koch');
    fixture.componentRef.setInput('folders', [
      { id: 'inbox', name: 'Inbox', icon: 'inbox', count: 128 },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display user name', () => {
    expect(fixture.nativeElement.textContent).toContain('Alicia Koch');
  });
});
