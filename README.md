# Before You Build Skill

Don't ask AI to build it yet. Ask why it might fail first.

Before You Build Skill is a lightweight open-source skill package for AI coding tools. Use it before starting a product, adding a feature, expanding scope, or asking an agent to implement an idea.

It does not build your app. It makes the agent pause and review product risk first.

## Why This Exists

AI coding agents made building much faster. That also makes it easier to spend days or weeks polishing the wrong thing.

This skill adds a simple pre-build review step. Before the agent writes code, it should challenge the riskiest assumptions: who needs this, why now, what they use today, whether they would pay, and what would make the idea fail.

## Who Should Use It

- Indie hackers and solo founders testing new product ideas.
- AI SaaS builders turning demos into products.
- Product engineers adding features to existing products.
- Teams using Codex, Claude Code, Cursor, OpenCode, OpenClaw, or similar coding agents.
- Anyone tempted to ask an agent to implement before the demand risk is clear.

## What It Does

- Reviews product and feature ideas before implementation.
- Challenges demand, distribution, pricing, retention, trust, and workflow assumptions.
- Matches common failure patterns such as thin wrappers, low-frequency needs, platform dependency, and subscription mismatch.
- Suggests the smallest useful validation step before coding.
- Can optionally query Before You Build Case Memory for similar public cases.

## When To Use It

Use it before:

- building a new SaaS, AI app, side project, or startup idea;
- adding a new feature to an existing product;
- copying a competitor feature;
- expanding a prototype into a platform;
- asking an AI coding agent to build before the riskiest assumption is clear.

Do not use it as a replacement for technical review, security review, architecture review, or code review. This skill is about whether the product or feature should be built, not how to implement it.

## Quick Start

Copy this into your AI coding tool:

```text
Use before-you-build to review this idea before implementation:

[Describe the product, feature, target users, current alternatives, and why you think it should exist.]
```

The agent should return a short reality check with a verdict before it starts implementation.

## Package Contents

```text
.
- SKILL.md
- agents/
  - openai.yaml
- references/
  - case-memory-api.md
  - evidence-check.md
  - failure-patterns.md
- examples/
  - feature-change.md
  - launched-project.md
  - new-product-idea.md
- docs/
  - INSTALL.md
  - PROMOTION.md
```

## Install

Clone or download this repository, then add the whole folder to your AI coding tool's skill, agent, or custom instruction location.

```bash
git clone https://github.com/bin1874/before-you-build-skill.git
```

For tools that do not support skill folders, open `SKILL.md` and paste the relevant instructions into your project rules or custom instructions.

See [docs/INSTALL.md](docs/INSTALL.md) for tool-specific setup notes.

## Basic Usage

Start a request with:

```text
before you build: I want to build an AI tool that...
```

Or:

```text
Use before-you-build to review this feature before I implement it:
...
```

The skill should return a short reality check, usually with:

- what you want to build;
- the biggest risk;
- likely failure patterns;
- validation steps;
- a recommendation: `Build small`, `Validate first`, `Pivot first`, or `Don't build yet`.

## Example

Input:

```text
before you build: I want to build an AI tool that summarizes meeting recordings for freelancers.
```

Expected shape:

```markdown
## Quick Reality Check

What you want to build:
- An AI meeting summary tool for freelancers.

Biggest risk:
- The problem may be too low-frequency or already solved well enough by existing meeting tools.

Failure patterns:
- Free alternative is good enough
- Subscription mismatch
- Tool without workflow

Validate before building:
1. Find 10 freelancers who record more than 5 client meetings per month.
2. Ask what they currently use and what is painful enough to pay for.
3. Manually summarize 3 real recordings and ask for payment before automating.

Recommendation:
Validate first
```

## Case Memory

Normal use does not require an API key.

The skill can optionally query the public Before You Build Case Memory API when a compatible agent or integration is available. Before doing that, it should ask for user permission unless the user already asked to use the case database.

Case Memory endpoint:

```text
POST https://api.beforeyoubuild.fyi/api/v1/case-memory/search
```

The endpoint is used to retrieve similar public product cases from [Before You Build](https://beforeyoubuild.fyi). It is not required for the core skill to work.

## Privacy Boundary

Do not send secrets, customer names, private financials, credentials, private user data, or unreleased confidential details to any remote endpoint.

If Case Memory is used, send only a short idea summary and the minimum fields needed to find similar public cases.

## Website

- Product risk case library: [beforeyoubuild.fyi](https://beforeyoubuild.fyi)
- Skill page: [beforeyoubuild.fyi/en/skill](https://beforeyoubuild.fyi/en/skill)

## Share

If you want to share this project, start with the core idea:

> AI coding agents made building easier. Before you ask one to build, ask why the idea might fail.

More copy, directory notes, and community posting angles are in [docs/PROMOTION.md](docs/PROMOTION.md).

## License

MIT
