# Promotion Notes

This file contains reusable copy and channel notes for sharing Before You Build Skill.

## Positioning

Core message:

```text
Don't ask AI to build it yet. Ask why it might fail first.
```

Longer version:

```text
AI coding agents made building easier. That also makes it easier to build the wrong thing faster.

Before You Build Skill is an open-source skill for Codex, Claude Code, Cursor, and similar tools. It makes the agent review product risk before writing code.
```

## One-Line Description

```text
An open-source AI coding skill that reviews product and feature risk before the agent starts building.
```

## Short Post

```text
I made a small open-source skill for AI coding agents.

It does not build your app. It makes the agent pause first and ask why the idea might fail.

Use it before starting a product, adding a feature, or turning an AI demo into a SaaS.

GitHub: https://github.com/bin1874/before-you-build-skill
npx: npx before-you-build-skill install codex
```

## Longer Post

```text
AI coding agents made execution much faster.

That is useful, but it creates a new problem: it is now very easy to spend a weekend building a polished version of an idea nobody really wants.

I open-sourced Before You Build Skill, a small skill package for AI coding tools.

Before the agent writes code, it reviews:
- who the product or feature is for;
- what situation creates the need;
- what people use today;
- whether the pain is frequent or urgent enough;
- why users might not pay or keep using it;
- the smallest validation step before building.

It works without an API key. Case Memory is optional.

GitHub: https://github.com/bin1874/before-you-build-skill
npm: https://www.npmjs.com/package/before-you-build-skill
```

## Launch Copy After npm Release

### X / Twitter

```text
I published Before You Build Skill on npm.

It is a small open-source skill for AI coding agents.

The point is simple: before Codex, Claude Code, Cursor, Hermes, OpenClaw, or Gemini CLI starts implementing, the agent should first ask why the idea might fail.

Install:
npx before-you-build-skill install codex

Other targets:
npx before-you-build-skill install claude
npx before-you-build-skill install cursor --path /path/to/project
npx before-you-build-skill install openclaw
npx before-you-build-skill install hermes
npx before-you-build-skill install gemini

GitHub: https://github.com/bin1874/before-you-build-skill
npm: https://www.npmjs.com/package/before-you-build-skill
```

### Hacker News / Reddit / Indie Hackers

```text
I built Before You Build Skill, an open-source pre-build risk check for AI coding agents.

AI coding tools make it much faster to implement an idea, but they also make it easier to spend time polishing the wrong thing. This skill asks the agent to pause before implementation and review demand, distribution, pricing, retention, trust, and workflow risk.

It is not a startup oracle and it does not replace user research. It is a small guardrail before starting a product, feature, AI app, SaaS idea, or side project.

It now installs through npm:

npx before-you-build-skill install codex
npx before-you-build-skill install claude
npx before-you-build-skill install cursor --path /path/to/project
npx before-you-build-skill install openclaw
npx before-you-build-skill install hermes
npx before-you-build-skill install gemini

GitHub: https://github.com/bin1874/before-you-build-skill
npm: https://www.npmjs.com/package/before-you-build-skill
```

### Product Hunt / Directory Blurb

```text
Before You Build Skill is an open-source pre-build risk review for AI coding agents. It helps Codex, Claude Code, Cursor, OpenClaw, Hermes, and Gemini CLI challenge product and feature assumptions before writing code. Use it to check demand, distribution, pricing, retention, trust, and workflow risk before turning an idea into implementation.
```

## Good Channels

- GitHub topics and README search.
- Agent skill directories and AI coding tool directories.
- Indie hacker communities.
- AI coding communities.
- Product and founder communities.
- Blog posts about pre-build validation for AI-built products.

## Good Submission Angles

- "A pre-build risk check for AI coding agents."
- "A tiny skill that stops agents from implementing too early."
- "Vibe coding needs a product-risk brake."
- "Before you ask Codex, Claude Code, or Cursor to build it, ask why it might fail."

## Avoid

- Do not spam generic AI tool directories.
- Do not claim the skill predicts startup success or failure.
- Do not present it as a replacement for user research.
- Do not over-emphasize Case Memory on first contact; the skill works without it.
- Do not post the same link repeatedly in the same community.

## Suggested Directory Metadata

Name:

```text
Before You Build Skill
```

Tagline:

```text
Ask why your product or feature might fail before your AI agent builds it.
```

Description:

```text
Before You Build Skill is an open-source skill package for AI coding tools. It helps Codex, Claude Code, Cursor, and similar agents review product and feature risk before implementation. It challenges demand, distribution, pricing, retention, trust, and workflow assumptions, then recommends the smallest useful validation step before coding.
```

Tags:

```text
AI agents, coding agents, product validation, indie hackers, startup, SaaS, Cursor, Claude Code, Codex
```

Project URL:

```text
https://github.com/bin1874/before-you-build-skill
```

Website:

```text
https://beforeyoubuild.fyi/en/skill
```
