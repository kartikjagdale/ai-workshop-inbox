import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent, CardEmail } from './card.component';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;

  const mockEmail: CardEmail = {
    id: '1',
    from: { name: 'Alice Smith', email: 'alice@example.com' },
    subject: 'Re: Project Update',
    preview: 'A SaaS platform offers cloud-based solutions...',
    timestamp: '1 min ago',
    read: false,
    labels: [{ name: 'Project', variant: 'selected' }, { name: 'Work', variant: 'default' }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.componentRef.setInput('email', mockEmail);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display sender name', () => {
    expect(fixture.nativeElement.textContent).toContain('Alice Smith');
  });

  it('should show unread indicator when not read', () => {
    const dot = fixture.nativeElement.querySelector('.bg-\\[\\#2563eb\\]');
    expect(dot).toBeTruthy();
  });
});
