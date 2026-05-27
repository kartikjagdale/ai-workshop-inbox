import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InboxPageComponent } from './inbox-page.component';

describe('InboxPageComponent', () => {
  let fixture: ComponentFixture<InboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InboxPageComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display inbox title', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Inbox');
  });
});
