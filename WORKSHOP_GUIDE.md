# Workshop Facilitator Guide

## Timeline (13:30 — 17:00)

| Time | Phase | Branch | What Happens |
|------|-------|--------|--------------|
| 13:30–14:45 | Theory | — | Deck: Modules 1–6 (LLM fundamentals → MCP) |
| 14:45–15:00 | Break | — | Everyone installs/updates Claude Code |
| 15:00–15:20 | Act 1: The Fumble | `main` → `stage-01-fumble` | Live demo: Claude without context |
| 15:20–15:45 | Act 2: CLAUDE.md | `stage-02-claude-md` | Add CLAUDE.md, regenerate — before/after contrast |
| 15:45–16:10 | Act 3: Design System | `stage-03-design-system` | Figma MCP pulls design, Claude builds components |
| 16:10–16:30 | Act 4: Skills | `stage-04-skill` | Create `/add-component` skill |
| 16:30–16:45 | Act 5: Hooks | `stage-05-hook` | Wire lint-on-edit, test-on-stop |
| 16:45–17:00 | Act 6: Full App | `stage-06-inbox-view` | See compound effect, Q&A |

## Teaching Notes Per Phase

### Act 1 — The Fumble (main → stage-01)
- Have everyone clone and `npm install` during the break
- Ask them to prompt Claude: "Generate an inbox card component in libs/ui"
- Show the result on projector — point out every wrong pattern
- Key insight: "The model defaults to its training data (Angular 14–16 patterns)"

### Act 2 — CLAUDE.md (stage-02)
- Show them the CLAUDE.md file structure
- Ask them to paste the SAME prompt
- Watch the contrast — this is the "aha" moment
- Key insight: "Same model, same prompt, different context = different output"

### Act 3 — Design System (stage-03)
- Demo Figma MCP setup (already configured if they followed setup)
- Show how Claude reads the design and generates matching components
- Key insight: "MCP = standard connector, build once use everywhere"

### Act 4 — Skills (stage-04)
- Explain skills as "saved prompts loaded on demand"
- Walk through the `/add-component` skill file
- Have them try it: `/add-component avatar in libs/ui`
- Key insight: "One-time investment, permanent consistency"

### Act 5 — Hooks (stage-05)
- Show `.claude/settings.json` hook configuration
- Make a deliberate mistake, show the hook catching it
- Key insight: "The wrapper enforces standards even when the model drifts"

### Act 6 — Full Assembly (stage-06)
- Just show the final running app
- Point out how each piece (CLAUDE.md + skill + hook) contributed
- Key insight: "The harness wins — you engineer the context, not the model"

## Fallback Plan

If something breaks during live demo:
- Jump to the target branch (`git checkout stage-XX-name`)
- Show the pre-built result
- "Here's what it would produce — let me show you the code"
- Continue from there

## Setup Checklist (before workshop)

- [ ] Repo pushed to internal GitLab/GitHub where team can clone
- [ ] `npm install` works cleanly
- [ ] `npm start` runs on stage-06 (final app)
- [ ] Figma MCP authenticated
- [ ] Claude Code latest version installed
- [ ] Projector/screen share ready
