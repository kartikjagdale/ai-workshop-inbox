# Kiteworks Inbox — AI Workshop Practice App

A phased Angular inbox application used as the hands-on exercise for the internal AI/Claude Code workshop. Each branch represents a stage in the learning journey.

## Stack

- Angular 21 (standalone components, signals)
- Nx 22 (integrated monorepo)
- Tailwind CSS v4
- Vite + Vitest
- lucide-angular (icons)

## Quick Start

```bash
npm install
npm start        # serves at http://localhost:4200
npm test         # runs all tests
npm run lint     # lints all projects
```

## Workshop Branches

| Branch | Stage | What It Teaches |
|--------|-------|-----------------|
| `main` | Starting point | Bare Nx scaffold — no AI config |
| `stage-01-fumble` | The "Before" | What Claude produces WITHOUT CLAUDE.md |
| `stage-02-claude-md` | The "After" | Same prompt + CLAUDE.md = correct output |
| `stage-03-design-system` | MCP + Components | Figma MCP pulls design, Claude builds components |
| `stage-04-skill` | Custom Skills | `/add-component` skill encodes conventions |
| `stage-05-hook` | Hooks & Guardrails | Auto-lint on edit, test on stop |
| `stage-06-inbox-view` | Full Assembly | 3-column inbox, compound effect of harness |

## Navigating Branches

```bash
git checkout main                    # start here
git checkout stage-01-fumble         # see the bad output
git checkout stage-02-claude-md      # see the fix
git checkout stage-03-design-system  # design system from Figma
git checkout stage-04-skill          # custom skill
git checkout stage-05-hook           # hooks
git checkout stage-06-inbox-view     # full app
```

Each branch has instruction files (`*_instructions.md`) that guide you through what to do. Later branches include all previous instruction files so you can review any prior step.

## Project Structure

```
apps/
  inbox/              — shell application
libs/
  ui/                 — design system components (kw- prefix)
  data/               — models, mock data, services
  feature-inbox/      — inbox feature page
```

## Prerequisites

- Node.js 20+
- Claude Code CLI installed and authenticated
- Figma MCP (optional, for stage-03): `claude mcp add --transport http figma https://mcp.figma.com/mcp`
