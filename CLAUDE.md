# Kiteworks Inbox — Development Conventions

## Stack
- Angular 21 (standalone components, signal-based)
- Nx 22 integrated monorepo
- Tailwind CSS v4 (utility-first, no component CSS frameworks)
- Vite + Vitest for build and testing
- TypeScript strict mode

## Angular Conventions (MANDATORY)

### Components
- ALWAYS use `ChangeDetectionStrategy.OnPush`
- ALWAYS use standalone components (never NgModules)
- ALWAYS use inline template and styles (template: `...`, styles: [`...`])
- Selector prefix: `kw-` for libs/ui, `kw-feature-` for feature libs

### Signals (Angular 19+)
- Inputs: `input()` or `input.required<T>()` — NEVER use `@Input()` decorator
- Outputs: `output<T>()` — NEVER use `@Output()` with EventEmitter
- Computed values: `computed(() => ...)`
- State: `signal<T>(initialValue)`

### Dependency Injection
- ALWAYS use `inject()` function — NEVER use constructor injection
- Services use `providedIn: 'root'` or are provided at route level

### Control Flow (Angular 17+)
- ALWAYS use built-in control flow: `@if`, `@for`, `@switch`
- NEVER use `*ngIf`, `*ngFor`, `*ngSwitch` structural directives
- NEVER import CommonModule — it is not needed with built-in control flow

### File Organization
- Co-locate tests: `component-name.component.spec.ts` next to source
- One component per file
- Barrel exports via `index.ts` in each library

## Nx Structure
- `apps/inbox` — shell application
- `libs/ui` — shared design system components (prefix: `kw-`)
- `libs/data` — models, mock data services, state
- `libs/feature-inbox` — inbox feature page

## Testing
- Vitest for unit tests
- Each component must have a corresponding `.spec.ts`
- Use `TestBed` with standalone component testing

## Styling
- Tailwind utility classes in templates
- No global CSS except Tailwind base/reset
- No separate `.css` files for components
