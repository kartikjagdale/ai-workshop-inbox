# libs/feature-inbox — Inbox Feature

Smart/container components that compose UI components with data services.

## Conventions
- Components here CAN inject services (they are "smart" components)
- Import UI components from `@kw-inbox/ui`
- Import data services from `@kw-inbox/data`
- Selector prefix: `kw-feature-`
- ChangeDetectionStrategy.OnPush always
- Inline template and styles
- Use `inject()` for all dependency injection
