import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabButtonComponent } from './tab-button.component';

describe('TabButtonComponent', () => {
  let fixture: ComponentFixture<TabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabButtonComponent);
    fixture.componentRef.setInput('tabs', ['All mail', 'Unread']);
    fixture.componentRef.setInput('activeTab', 'All mail');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render all tabs', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });
});
