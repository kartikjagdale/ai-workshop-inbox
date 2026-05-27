# /add-component

Generate a new Angular component following all project conventions.

## Arguments

$ARGUMENTS should be in the format: `<component-name> in <library>`

Examples:
- `avatar in libs/ui`
- `inbox-toolbar in libs/feature-inbox`

## Instructions

Parse the component name and target library from the arguments.

1. Determine the selector prefix:
   - `libs/ui` → `kw-`
   - `libs/feature-inbox` → `kw-feature-`
   - `libs/data` → not applicable (data lib has no components)

2. Create the component file at `libs/{library}/src/lib/{component-name}/{component-name}.component.ts`:

```typescript
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: '{prefix}{component-name}',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <!-- TODO: implement {component-name} template -->
    </div>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class {PascalCaseName}Component {
  // Define signal inputs with input() or input.required<T>()
  // Define signal outputs with output<T>()
}
```

3. Create the spec file at `libs/{library}/src/lib/{component-name}/{component-name}.component.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { {PascalCaseName}Component } from './{component-name}.component';

describe('{PascalCaseName}Component', () => {
  let fixture: ComponentFixture<{PascalCaseName}Component>;
  let component: {PascalCaseName}Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [{PascalCaseName}Component],
    }).compileComponents();

    fixture = TestBed.createComponent({PascalCaseName}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

4. Add an export to `libs/{library}/src/index.ts`:
```typescript
export { {PascalCaseName}Component } from './lib/{component-name}/{component-name}.component';
```

## Mandatory Rules (NEVER violate these)

- NEVER use `@Input()` decorator — use `input()` or `input.required<T>()`
- NEVER use `@Output()` with EventEmitter — use `output<T>()`
- NEVER use constructor injection — use `inject()`
- NEVER use `*ngIf` or `*ngFor` — use `@if` and `@for`
- NEVER import CommonModule
- NEVER create separate .html or .css files
- ALWAYS use ChangeDetectionStrategy.OnPush
- ALWAYS use standalone: true
- ALWAYS use Tailwind utility classes for styling
