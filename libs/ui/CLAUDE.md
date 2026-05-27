# libs/ui — Design System

Shared presentational components for the Kiteworks Inbox app.

## Conventions
- Every component selector starts with `kw-`
- Components are pure/presentational — no service injection, no side effects
- All inputs via `input()` / `input.required<T>()`
- All outputs via `output<T>()`
- Inline templates and styles only
- ChangeDetectionStrategy.OnPush always
- No CommonModule — use `@if` / `@for` built-in control flow

## Components in this library
- Card (email card)
- MenuBar (sidebar navigation)
- MenuItem (single menu item row)
- Icon (icon wrapper)
- Switch (toggle)
- TabButton (segmented tab)

## Styling
- Use Tailwind utility classes directly in template
- Responsive: mobile-first (sm:, md:, lg: breakpoints)
- Colors: use semantic names from Tailwind theme (primary, surface, muted, accent)
