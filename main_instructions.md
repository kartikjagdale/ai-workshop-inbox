# Stage: main — The Starting Point

## What's Here

A bare Nx monorepo with:
- An Angular 21 app (`apps/inbox`) showing a placeholder page
- Three empty libraries (`libs/ui`, `libs/data`, `libs/feature-inbox`)
- Tailwind CSS configured
- No CLAUDE.md, no skills, no hooks — zero AI configuration

## Your Task

Open Claude Code in this directory and ask it to generate a component. Use this exact prompt:

```
Generate an inbox card component in libs/ui that shows sender name, subject, preview text, a timestamp, and an unread indicator dot. Use Angular best practices.
```

## What to Watch For

Without any CLAUDE.md guidance, Claude will default to its training data. Look for these patterns in the output:

- `@Input()` decorators (should be `input()` / `input.required<T>()`)
- `@Output() + EventEmitter` (should be `output<T>()`)
- `*ngIf` / `*ngFor` directives (should be `@if` / `@for`)
- Constructor injection (should be `inject()`)
- Separate `.html` and `.css` files (should be inline)
- `app-` selector prefix (should be `kw-`)
- No `ChangeDetectionStrategy.OnPush`
- `CommonModule` import (not needed with built-in control flow)

## Theory Connection

This demonstrates **Module 2 — Prompts & Context**: without the right context in the window, the model defaults to its training distribution.

## Next Step

- `git checkout stage-01-fumble` — to see a pre-built example of the wrong output
- `git checkout stage-02-claude-md` — to see how CLAUDE.md fixes it
