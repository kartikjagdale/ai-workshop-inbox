import { TestBed } from '@angular/core/testing';
import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return inbox emails by default', () => {
    const emails = service.filteredEmails();
    expect(emails.every(e => e.folder === 'inbox')).toBe(true);
  });

  it('should select first email by default', () => {
    expect(service.selectedEmail()).toBeTruthy();
  });

  it('should filter unread', () => {
    service.setUnreadFilter(true);
    const emails = service.filteredEmails();
    expect(emails.every(e => !e.read)).toBe(true);
  });
});
