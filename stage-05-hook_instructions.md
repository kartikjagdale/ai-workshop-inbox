# Stage: stage-05-hook — Automated Guardrails

## What's Here

Two hooks configured in `.claude/settings.json`:
1. **PostToolUse (Edit|Write)**: Runs `nx lint --fix` after every file Claude edits
2. **Stop**: Runs all tests when Claude finishes a task

Plus ESLint rules in `eslint.config.mjs` that warn on:
- `@Input()` decorator usage
- `@Output()` decorator usage
- `CommonModule` imports
- `EventEmitter` usage

## Your Task

1. Read `.claude/settings.json` to see how hooks are configured.

2. Try making Claude introduce a mistake on purpose:

```
In libs/ui/src/lib/card/card.component.ts, change the email input to use @Input() decorator instead of input.required(). Then ask Claude to fix something else in the file.
```

3. Watch what happens — the lint hook fires after the edit and catches the `@Input()` violation.

4. Now ask Claude to finish its work (let it "stop"). The test hook runs automatically and verifies nothing is broken.

## What to Notice

- Hooks run as shell commands — they're regular code, not AI
- The hook's output is shown to Claude, who can self-correct
- This creates a feedback loop: model writes → hook catches → model fixes
- Even without CLAUDE.md conventions being perfect, hooks enforce the rules

## Theory Connection

**Module 3 — Tool Calling & Interception**: Hooks are the wrapper exercising control. They're not inside the model — they're regular code that runs at lifecycle events.

**Module 8 — Hooks**: The harness (Claude Code) exposes lifecycle events. You attach commands to them. The model is just the text predictor — the harness does the enforcement.

## Hook Types Available

| Event | When it fires |
|-------|---------------|
| `PostToolUse` | After any tool call (filtered by matcher) |
| `PreToolUse` | Before a tool call (can block it) |
| `Stop` | When Claude finishes responding |
| `SubagentStop` | When a sub-agent completes |

## Next Step

- `git checkout stage-06-inbox-view` — see the full inbox assembled with all pieces working together
