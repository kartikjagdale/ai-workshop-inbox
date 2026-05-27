# Stage: stage-01-fumble — The "Before" Evidence

## What's Here

This branch contains a card component that was generated WITHOUT any CLAUDE.md context. It compiles and runs, but uses every wrong pattern.

Look at `libs/ui/src/lib/card/`:
- `card.component.ts` — uses `@Input()`, constructor, no OnPush
- `card.component.html` — separate template file, uses `*ngIf` / `*ngFor`
- `card.component.css` — separate styles file (should be inline + Tailwind)
- `card.module.ts` — NgModule wrapper (should be standalone only)

## The Wrong Patterns (and what's correct)

| What Claude Did | What It Should Be |
|----------------|-------------------|
| `@Input() senderName: string` | `senderName = input.required<string>()` |
| `@Output() cardClick = new EventEmitter()` | `cardClick = output<void>()` |
| `constructor() {}` | Remove — use `inject()` if services needed |
| `*ngIf="!isRead"` | `@if (!isRead()) { ... }` |
| `*ngFor="let label of labels"` | `@for (label of labels(); track label) { ... }` |
| `selector: 'app-card'` | `selector: 'kw-card'` |
| `templateUrl: './card.component.html'` | `template: \`...\`` (inline) |
| No change detection specified | `changeDetection: ChangeDetectionStrategy.OnPush` |
| `imports: [CommonModule]` | Remove — not needed with built-in control flow |

## Challenge

Can you spot all 9 violations just by reading the code?

## Theory Connection

**Module 2 — Prompts & Context**: The LLM's training data is mostly Angular 14–16 era. Without explicit instructions in the context window, it produces what it saw most often during training.

## Next Step

- `git checkout stage-02-claude-md` — see how adding CLAUDE.md to the context window completely changes the output
