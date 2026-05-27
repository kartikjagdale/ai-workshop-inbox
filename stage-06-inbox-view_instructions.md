# Stage: stage-06-inbox-view — The Full Assembly

## What's Here

The complete 3-column inbox application matching the Figma design:
- **Left**: MenuBar (288px) — folders + categories with counts
- **Middle**: Inbox list (432px) — search, tab filter, email cards with tags
- **Right**: Email detail (flex) — toolbar, sender info, body, reply area

All built using:
- CLAUDE.md conventions (correct Angular patterns everywhere)
- Design system from Figma (stage-03 components)
- Signal-based state management (EmailService)

## The Compound Effect

This is what happens when CLAUDE.md + skills + hooks work together:
- Claude writes code following conventions (CLAUDE.md)
- New components scaffold correctly every time (skill)
- Mistakes get caught automatically (hooks)
- The result matches the design spec closely (Figma MCP)

## Your Task — Try Extending It

Use the full harness to add a new feature. Try this prompt:

```
Add a "compose new email" button at the bottom of the sidebar. When clicked, it should show a compose form in the detail pane (right column) with To, Subject, and Body fields. Use the existing design system components where possible.
```

Watch how:
1. Claude reads CLAUDE.md and uses correct patterns
2. The lint hook catches any slip-ups
3. The component follows the same style as existing ones

## Architecture Overview

```
apps/inbox/src/app/app.ts
  └── InboxPageComponent (libs/feature-inbox)
        ├── MenuBarComponent (libs/ui)
        │     └── MenuItemComponent (libs/ui)
        ├── CardComponent (libs/ui)
        │     └── TagComponent (libs/ui)
        ├── TabButtonComponent (libs/ui)
        ├── IconButtonComponent (libs/ui)
        └── ToggleComponent (libs/ui)

EmailService (libs/data) — signal-based state
  ├── filteredEmails (computed)
  ├── selectedEmail (computed)
  ├── unreadCount (computed)
  └── folders / categories (signals)
```

## Theory Connection

**Module 4 — Sub-agents & Thinking**: For complex features, use Opus for planning and Sonnet for execution. Try: "Plan how to add email compose functionality" with Opus, then execute pieces with Sonnet.

**The Thesis**: Claude Code is a programmable context window. Everything you've seen — CLAUDE.md, skills, hooks, MCP — is just a way to control what the model sees and when.

## Verify

```bash
npm start        # full 3-column inbox renders at localhost:4200
npm test         # all tests pass
npm run lint     # no violations
```
