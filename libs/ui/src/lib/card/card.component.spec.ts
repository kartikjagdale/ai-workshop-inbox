import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent, CardEmail } from './card.component';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;

  const mockEmail: CardEmail = {
    id: '1',
    from: { name: 'Alice Smith', email: 'alice@example.com' },
    subject: 'Re: Project Update',
    preview: 'A SaaS platform offers cloud-based solutions...',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    read: false,
    labels: [{ name: 'Work', color: 'blue' }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.componentRef.setInput('email', mockEmail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display sender name', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Alice Smith');
  });

  it('should show unread indicator when not read', () => {
    const dot = fixture.nativeElement.querySelector('.bg-blue-500');
    expect(dot).toBeTruthy();
  });
});
