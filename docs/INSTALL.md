# Install Before You Build Skill

Before You Build Skill works without an API key. The core package is local text instructions plus references and examples.

## Option 1: Install with npx

The npm installer copies this skill into the local directory used by each tool.

```bash
npx before-you-build-skill install codex
npx before-you-build-skill install claude
npx before-you-build-skill install cursor --path /path/to/project
npx before-you-build-skill install openclaw
npx before-you-build-skill install hermes
npx before-you-build-skill install gemini
```

Install every supported local adapter:

```bash
npx before-you-build-skill install all
```

If a target already exists, review it first. To replace it:

```bash
npx before-you-build-skill install codex --force
```

Target paths:

| Target | Path |
|---|---|
| Codex | `~/.codex/skills/before-you-build/` |
| Claude Code | `~/.claude/skills/before-you-build/` |
| Cursor | `<project>/.cursor/rules/before-you-build.md` |
| OpenClaw | `~/.openclaw/skills/before-you-build/` |
| Hermes | `~/.hermes/skills/before-you-build/` |
| Gemini CLI | `~/.gemini/commands/before-you-build.toml` and `~/.gemini/skills/before-you-build/` |

## Option 2: Clone the Repository

```bash
git clone https://github.com/bin1874/before-you-build-skill.git
```

Add the full folder to your AI coding tool if it supports local skills or instruction folders.

## Option 3: Download ZIP

Open the GitHub repository and use GitHub's **Code -> Download ZIP** option.

Unzip the folder, then add it to your tool's skill, agent, or custom instruction location.

## Codex

If your Codex setup supports local skills, place the repository folder in your local Codex skills directory.

One-command setup:

```bash
npx before-you-build-skill install codex
```

Typical local layout:

```text
~/.codex/skills/before-you-build-skill/
  SKILL.md
  agents/
  references/
  examples/
```

Then ask:

```text
Use before-you-build to review this idea before implementation:
...
```

## Claude Code

One-command setup:

```bash
npx before-you-build-skill install claude
```

If your Claude Code workflow uses project instructions, copy the relevant parts of `SKILL.md` into your project instructions or `CLAUDE.md`.

Recommended use:

```text
Before implementing this feature, apply the before-you-build review from the project instructions.
```

## Cursor

One-command project setup:

```bash
npx before-you-build-skill install cursor --path /path/to/project
```

If your Cursor project uses rules, copy `SKILL.md` into a project rule file, for example:

```text
.cursor/rules/before-you-build.md
```

Then invoke it explicitly before implementation:

```text
Use the before-you-build rule to review this feature before writing code.
```

## OpenCode and Similar Tools

If the tool supports custom agents, skills, memories, rules, or instruction files, add `SKILL.md` as a named instruction called `before-you-build`.

If it only supports one global instruction field, paste the "Core Behavior", "When To Use", and "Output Modes" sections from `SKILL.md`.

## OpenClaw

Before You Build Skill is designed to work as a text-first OpenClaw skill. Normal use does not require shell access, file writes, network access, or an API key.

If your OpenClaw setup supports GitHub skill installation, try:

```bash
openclaw skills install git:bin1874/before-you-build-skill@main --as before-you-build
```

The npm installer is also available when you want a direct local copy:

```bash
npx before-you-build-skill install openclaw
```

If you prefer manual installation, clone the repository into OpenClaw's managed skills directory:

```bash
git clone https://github.com/bin1874/before-you-build-skill.git ~/.openclaw/skills/before-you-build
```

Expected local layout:

```text
~/.openclaw/skills/before-you-build/
  SKILL.md
  README.md
  references/
  examples/
  docs/
```

Then invoke it explicitly before implementation:

```text
Use before-you-build to review this product or feature idea before writing code:
...
```

For ClawHub publishing notes, see `docs/OPENCLAW.md`.

## Hermes

Hermes loads user skills from `~/.hermes/skills/`.

One-command setup:

```bash
npx before-you-build-skill install hermes
```

Expected local layout:

```text
~/.hermes/skills/before-you-build/
  SKILL.md
  README.md
  references/
  examples/
  docs/
```

Then invoke it explicitly before implementation:

```text
Use before-you-build to review this idea before implementation:
...
```

## Gemini CLI

Gemini CLI does not load this repository as a Codex-style skill folder by default. The installer creates a reusable slash command and stores the full skill package as local reference material.

One-command setup:

```bash
npx before-you-build-skill install gemini
```

Installed files:

```text
~/.gemini/commands/before-you-build.toml
~/.gemini/skills/before-you-build/
```

In Gemini CLI, reload commands if the session is already open:

```text
/commands reload
```

Then use:

```text
/before-you-build I want to build an AI tool that summarizes meetings for freelancers.
```

## Minimal Prompt-Only Setup

If you do not want to install anything, paste this before a build request:

```text
Before building, review this idea using a before-you-build risk check.

Do not recommend code, architecture, or implementation yet. First identify:
- the target user and concrete scenario;
- the biggest product risk;
- the most likely failure pattern;
- what evidence is weak or missing;
- the smallest validation step before building;
- a verdict: Build small, Validate first, Pivot first, or Don't build yet.
```

## Case Memory

Normal use does not require an API key.

If a compatible agent can call external APIs, it may optionally query Before You Build Case Memory after asking for permission. See `references/case-memory-api.md`.
