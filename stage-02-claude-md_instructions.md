# Stage: stage-02-claude-md — The Power of Context

## What's Here

This branch adds CLAUDE.md files that shape what the model "sees" before generating code:
- `CLAUDE.md` (root) — Angular 21 conventions, Nx structure, testing patterns
- `libs/ui/CLAUDE.md` — design system rules (kw- prefix, presentational, signal I/O)
- `libs/data/CLAUDE.md` — data layer rules (interfaces, mocks, inject())
- `libs/feature-inbox/CLAUDE.md` — feature lib rules (smart components)

The card component in `libs/ui/src/lib/card/` now uses correct patterns.

## Your Task

1. Read through the root `CLAUDE.md` file. Notice how it explicitly says "NEVER use @Input()" and "ALWAYS use signal inputs."

2. Now try the same prompt from Stage 0:

```
Generate an inbox card component in libs/ui that shows sender name, subject, preview text, a timestamp, and an unread indicator dot. Use Angular best practices.
```

3. Compare the output to what stage-01-fumble produced. Same model, same prompt, completely different result.

## What Changed

Nothing about the model changed. The only difference is what's in the context window. CLAUDE.md is loaded automatically by Claude Code and prepended to every conversation — it shapes every response.

## Theory Connection

**Module 2 — Prompts & Context**: CLAUDE.md is effectively a project-level system prompt. It's "pinned" context that the model reads every turn, just like the system prompt in ChatGPT.

## Guidance for Your Own Projects

When writing CLAUDE.md:
- Be explicit about what NOT to do (negatives are powerful)
- Use "ALWAYS" and "NEVER" — the model responds to strong directives
- Put conventions that Claude would otherwise guess wrong
- Keep it focused — don't document things the model already knows

## Next Step

- `git checkout stage-03-design-system` — see how CLAUDE.md + Figma MCP together produce a full component library
