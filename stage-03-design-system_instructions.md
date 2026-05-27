# Stage: stage-03-design-system — MCP + Component Library

## What's Here

A complete design system in `libs/ui/` with 8 components built from Figma specs:
- Icon, Tag, MenuItem, MenuBar, Card, TabButton, IconButton, Toggle

All follow the conventions from CLAUDE.md (signals, OnPush, inline templates, Tailwind, kw- prefix). Icons use `lucide-angular`.

## Your Task

1. Set up the Figma MCP if you haven't already:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

2. Ask Claude to implement a design from Figma. Use this prompt with the Figma URL:

```
Implement this design from Figma.
@https://www.figma.com/design/75XfwGt24Pb5mtW9woHIb6/Inbox-UI-Design-AI-Workshop--Kartik-?node-id=1-824&m=dev
```

3. Watch how Claude reads the Figma file via MCP and generates components that match the design.

## What to Notice

- Claude reads the Figma node tree (component names, variants, properties)
- With CLAUDE.md in place, it generates Angular code using the correct conventions
- MCP is just another tool call — the same `while(true)` loop from Module 3

## Theory Connection

**Module 6 — MCP**: Figma MCP is a standardized connector. Claude Code calls it like any other tool. The response becomes context for code generation.

**Module 3 — Tool Calling**: The Figma read is a tool call. Claude outputs JSON requesting the design data, the MCP server returns it, Claude reads it and continues.

## Verify

```bash
npm test         # all 15 component tests pass
npm run lint     # no violations
npm start        # app compiles (placeholder page, components not wired to page yet)
```

## Next Step

- `git checkout stage-04-skill` — create a reusable skill that scaffolds new components with all conventions baked in
