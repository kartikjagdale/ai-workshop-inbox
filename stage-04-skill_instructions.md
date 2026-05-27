# Stage: stage-04-skill — Custom Skills

## What's Here

A custom skill at `.claude/commands/add-component.md` that encodes all Angular conventions into a reusable command. When you type `/add-component avatar in libs/ui`, Claude generates a complete component following every rule from CLAUDE.md — without you having to remind it.

## Your Task

1. Read the skill file at `.claude/commands/add-component.md`. Notice how it includes:
   - Expected arguments format
   - File templates with correct patterns
   - Mandatory rules section (NEVER/ALWAYS)

2. Try creating a new component using the skill:

```
/add-component search-bar in libs/ui
```

3. Inspect the output. It should have:
   - Correct selector (`kw-search-bar`)
   - Signal inputs/outputs
   - OnPush change detection
   - Inline template with Tailwind
   - Co-located spec file
   - Barrel export updated

## What to Notice

- The skill only injects its content when you invoke it (not every turn)
- It's more specific than CLAUDE.md — it's a recipe, not just rules
- Skills reduce repetitive prompting for common operations

## Theory Connection

**Module 2 — Prompts & Context**: A skill is on-demand context injection. It loads into the context window only when triggered, keeping the baseline context lean.

**Module 7 — Skills**: Skills are saved instructions. They're not code — they're prompts that shape the model's output for a specific task.

## How to Write Your Own Skill

Create a markdown file in `.claude/commands/your-skill-name.md`:
- Use `$ARGUMENTS` to accept parameters
- Include templates showing the expected output structure
- Add explicit rules (NEVER/ALWAYS) for things the model might get wrong
- Keep it focused on one task

## Next Step

- `git checkout stage-05-hook` — add automated guardrails that catch mistakes even when you forget to use the skill
