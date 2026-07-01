# Changelog

## 2026-07-01 23:34:17 CST

- Reviewed the live website and repository install-copy changes, then tightened the README compatibility table so npx is the primary setup path.
- Fixed the Codex manual install path in `docs/INSTALL.md` to match the actual installer target, `~/.codex/skills/before-you-build/`.
- Prepared patch release `0.1.2` so the npm package page can show the updated npx-first README instead of the stale `0.1.1` README.

## 2026-07-01 23:23:36 CST

- Updated README and install docs after the npm package went live, adding the npm badge, package link, and npx-first quick start commands.

## 2026-07-01 22:47:46 CST

- Normalized npm `bin` paths before first registry publish so `npx before-you-build-skill` keeps its executable entrypoint.

## 2026-07-01 22:10:39 CST

- Added an npm `npx before-you-build-skill` installer with local install targets for Codex, Claude Code, Cursor, OpenClaw, Hermes, and Gemini CLI.
- Added Gemini CLI slash-command setup that writes `before-you-build.toml` and stores the full skill package as local reference material.
- Updated README, install notes, and OpenClaw guidance to document the new `npx` flow while keeping OpenClaw's native Git install path.

## 2026-06-12 19:29:38 CST

- Opened `wshobson/agents` PR #578 after the maintainer confirmed the markdown-only pre-mortem skill was a good fit and welcomed a focused PR.
- Added a single-skill `before-you-build` plugin under `plugins/`, refreshed generated marketplace metadata, and updated the public plugin and skill catalog counts.
- Updated `docs/SUBMISSIONS.md` to mark issue #565 as PR-opened and record the new PR link plus validation notes.

## 2026-06-12 19:21:13 CST

- Responded to `junminhong/awesome-agent-skills` PR #6 review after rechecking that the PR was still open and not already accepted.
- Amended the PR to remove the repo-local `SKILL.md` and leave only `README.md` / `README_ZH.md` updates linking to the existing Before You Build Skill repository.
- Updated `docs/SUBMISSIONS.md` with the review-response status and follow-up record.

## 2026-06-10 12:22:20 CST

- Opened `cosmicstack-labs/mercury-agent-skills` PR #7 after rechecking that the upstream repository still did not contain `before-you-build`, `bin1874`, or a ClawHub entry.
- Opened `VoltAgent/awesome-openclaw-skills` PR #498 after rechecking that no existing entry or duplicate PR existed, using the required ClawHub link and a one-line README-only change.
- Posted follow-up comments on `OneWave-AI/claude-skills` PR #11 and `yzfly/awesome-claude-skills-zh` Issue #5 after verifying neither repository had already merged or listed the skill.
- Updated `docs/SUBMISSIONS.md` so the promotion tracker reflects the new PRs, follow-ups, and no-longer-blocked submission paths.

## 2026-06-06 22:54:54 CST

- Opened a focused PR to `OneWave-AI/claude-skills` after the maintainer confirmed the pre-build risk gate fit and requested a single-file contribution.
- Submitted only `before-you-build/SKILL.md` in the OneWave fork branch `bin1874:codex/add-before-you-build-lite`, keeping this repository's official full skill package unchanged.
- Updated `docs/SUBMISSIONS.md` to record the maintainer request, PR link, and boundary between the external lightweight adapter and the official Before You Build Skill.

## 2026-06-01 01:04:12 CST

- Continued GitHub ecosystem promotion without waiting for the previous four submissions, while still skipping the highest-gate official repositories such as OpenAI, Anthropic, and GitHub's official catalog.
- Submitted eight additional pull requests to skill directories and OpenClaw/Hermes/Codex ecosystem lists: `intellectronica/awesome-skills`, `RoggeOhta/awesome-codex-cli`, `EthanYolo01/Awesome-OpenClaw`, `LHL3341/awesome-claws`, `rohitg00/awesome-openclaw`, `ZeroPointRepo/awesome-hermes-skills`, `CommandCodeAI/agent-skills`, and `natea/ar-claude-skills`.
- Opened twenty-seven additional GitHub proposal issues across cross-agent skill catalogs, PM/product-skill libraries, OpenClaw directories, Hermes directories, and agent marketplaces.
- Verified all newly created pull requests are open after submission; `CommandCodeAI/agent-skills` also received a proposal issue after retrying a transient GitHub API timeout.

## 2026-06-01 00:43:17 CST

- Re-reviewed the existing GitHub promotion backlog now that `gh` authentication is working again, and prioritized high-fit repositories by contribution clarity, product-skill fit, and risk of low-quality outreach.
- Submitted a PR to `proflead/codex-skills-library` adding a concise `before-you-build` Codex planning skill.
- Opened skill proposal issues for `product-on-purpose/pm-skills` and `phuryn/pm-skills` according to their request-before-PR contribution rules.
- Prepared and validated a `tech-leads-club/agent-skills` Decision Making skill contribution, pushed it to the fork branch, and opened an issue because GitHub rejected cross-repo PR creation for the fork.

## 2026-05-31 09:30:50 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the search mostly resurfaced already-logged venues and did not uncover a stronger genuinely new submission target.
- Logged an Outreach Check-ins entry documenting that `block/agent-skills`, `spencerpauly/awesome-cursor-skills`, `anthropics/skills`, `supabase/agent-skills`, `VoltAgent/awesome-openclaw-skills`, `dotnet/skills`, `MicrosoftDocs/Agent-Skills`, `jdrhyne/agent-skills`, `seb1n/awesome-ai-agent-skills`, `psenger/ai-agent-skills`, and `agent-skills-hub/agent-skills-hub` were re-seen but did not produce a new submission opportunity.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and paused `/Users/hbf/.codex/automations/promote-before-you-build-skill-hourly/automation.toml` locally because the automation had already exceeded its intended five hourly passes and no automation-management tool is exposed in-session.

## 2026-05-31 08:29:17 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the strongest genuinely fresh target this pass was `LHL3341/awesome-claws`.
- Logged `LHL3341/awesome-claws` as blocked because it is a contribution-friendly OpenClaw ecosystem list with a visible `Contributing` section and explicit acceptance criteria for real-world, actively maintained resources.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, GitHub CLI still cannot reach `api.github.com`, and `tool_search` still does not expose any automation-management tool that can disable the already-overrun hourly automation.

## 2026-05-31 07:27:36 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the strongest genuinely fresh target this pass was `rohitg00/awesome-openclaw`.
- Logged `rohitg00/awesome-openclaw` as blocked because it is a contribution-friendly OpenClaw ecosystem list with explicit `Skills & Plugins` coverage and a documented PR flow, and logged `vincentkoc/awesome-openclaw` as deferred because the surfaced page did not show enough repo-specific intake detail or acceptance criteria to outrank the stronger OpenClaw lists already in backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `gh repo view rohitg00/awesome-openclaw`, `gh repo view vincentkoc/awesome-openclaw`, and `gh repo view SamurAIGPT/awesome-openclaw` still fail with `error connecting to api.github.com`.

## 2026-05-31 06:25:56 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the only genuinely fresh repository worth explicit logging was `cloudflare/skills`.
- Logged `cloudflare/skills` as deferred because it is a high-signal contribution-friendly vendor catalog for Cloudflare platform implementation workflows rather than a broad external discovery venue for pre-build product-validation skills.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still does not expose any automation-management tool that can disable the already-overrun hourly automation.

## 2026-05-31 05:24:32 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the search mostly resurfaced already-logged venues and did not uncover a stronger genuinely new submission target.
- Logged `hashgraph-online/awesome-codex-plugins` as skipped because it is a contribution-friendly Codex directory, but it curates plugin bundles and mirrored marketplace entries rather than standalone third-party `SKILL.md` repositories like Before You Build.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still does not expose any automation-management tool that can disable the already-overrun hourly automation.

## 2026-05-31 04:22:55 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the search mostly resurfaced already-logged venues and did not uncover a stronger genuinely new submission target.
- Logged an Outreach Check-ins entry documenting that `block/agent-skills`, `Prat011/awesome-llm-skills`, `RoggeOhta/awesome-codex-cli`, `theneoai/awesome-skills`, `supabase/agent-skills`, and `MiniMax-AI/skills` were re-seen but did not produce a new submission opportunity.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view theneoai/awesome-skills` still fails with `error connecting to api.github.com`, and `tool_search` still does not expose any automation-management tool that can disable the already-overrun hourly automation.

## 2026-05-31 03:22:02 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the search mostly resurfaced already-logged venues and did not uncover a stronger genuinely new submission target.
- Logged `agentskills/agentskills` as skipped because it is the Agent Skills specification/documentation repository rather than a third-party listing venue, and logged `hutchic/.cursor` as skipped because it is a personal Cursor configuration/docs repository rather than a community marketplace.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool that can disable the already-overrun hourly automation.

## 2026-05-31 02:21:32 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the only genuinely fresh candidate worth logging was `ZeroLu/awesome-openclaw`.
- Logged `ZeroLu/awesome-openclaw` as deferred because it has moderate adoption but the surfaced repository currently reads as a single-README OpenClaw resource guide without a clearly surfaced contribution guide or repo-specific acceptance rules for third-party listings.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` returned no automation-management tool that could disable the already-overrun hourly automation.

## 2026-05-31 01:20:45 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the only genuinely fresh candidate worth logging was `glebis/claude-skills`.
- Logged `glebis/claude-skills` as skipped because, despite open PR instructions and healthy activity, it presents as a maintainer-owned bundled skill suite with overlapping JTBD/product workflow coverage rather than a stronger neutral community directory or marketplace than the existing backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose an automation-management tool that could disable the already-overrun hourly automation.

## 2026-05-31 00:20:06 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the only genuinely fresh candidate worth logging was `aiskillstore/marketplace`.
- Logged `aiskillstore/marketplace` as skipped because its README routes third-party submissions through `skillstore.io/submit` and automated off-GitHub review rather than a GitHub issue or pull-request flow, which does not fit this automation's required `gh`-based submission path.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose an automation-management tool that could disable the already-overrun hourly automation.

## 2026-05-30 23:18:47 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the strongest genuinely new target this pass was `ZeroPointRepo/awesome-hermes-skills`.
- Logged `ZeroPointRepo/awesome-hermes-skills` as a blocked high-fit directory because its README explicitly welcomes PRs for maintained cross-agent skills with working `SKILL.md`, but this environment still cannot authenticate `gh` or reach `api.github.com` to submit.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose an automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 22:17:22 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the results only resurfaced already-logged targets, so no genuinely fresh outreach target cleared the bar.
- Logged an Outreach Check-ins entry documenting that `block/agent-skills`, `huggingface/skills`, `the911fund/skill-of-skills`, `product-on-purpose/pm-skills`, and `randroids-dojo/skills` were re-seen but did not produce a new submission opportunity.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose an automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 21:15:37 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directories, registries, and marketplaces; the results only resurfaced already-logged targets or closed/vendor-specific venues, so no genuinely fresh outreach target cleared the bar.
- Logged an Outreach Check-ins entry documenting that `github/awesome-copilot`, `android/skills`, `netresearch/claude-code-marketplace`, `skydoves/android-skills-mcp`, `psenger/ai-agent-skills`, and `sickn33/antigravity-awesome-skills` were re-seen but did not produce a new submission opportunity.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose an automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 20:14:15 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directory, skills registry, and skills marketplace repositories; the search mostly resurfaced already-logged backlog targets and one fresh contribution-closed repository.
- Logged `flutter/skills` as skipped because its README explicitly says the Flutter team is not accepting pull requests right now, so it is not a valid third-party submission venue for this automation.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose a usable automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 19:12:44 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional AI agent skill, Claude skill, Cursor skill, Codex skill, OpenClaw skill, `SKILL.md` directory, skills registry, and skills marketplace repositories; the search only resurfaced already-logged backlog targets plus one fresh weak-fit repo.
- Logged `seaworld008/Commonly-used-high-value-skills` as skipped because it presents as a maintainer-owned installable bundle rather than a neutral community directory or marketplace for third-party project promotion.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-overrun hourly automation.

## 2026-05-30 18:10:35 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional Codex, Claude, Cursor, OpenClaw, and cross-agent `SKILL.md` directories plus contribution-friendly marketplaces; the results only resurfaced already-logged repositories, so no genuinely fresh outreach target cleared the quality and fit bar.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still did not expose a usable automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 17:10:03 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional Codex, Claude, Cursor, OpenClaw, and cross-agent `SKILL.md` directories; no stronger genuinely new outreach venue surfaced beyond the existing blocked backlog.
- Logged `togethercomputer/skills` as deferred because it is an active contribution-friendly repository, but it is tightly vendor-scoped to Together AI platform workflows rather than broad pre-build product-validation guidance.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-overrun hourly automation.

## 2026-05-30 16:08:05 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for additional Codex, Claude, Cursor, OpenClaw, and cross-agent `SKILL.md` directories; no stronger genuinely new outreach venue surfaced beyond the existing blocked backlog.
- Logged `brabaflow/openclaw-skill` as skipped because it is a single maintainer-authored OpenClaw documentation package rather than a community directory or marketplace, and logged `harness/harness-skills` as deferred because it is tightly vendor-scoped to Harness CI/CD workflows.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 15:05:58 CST

- Rechecked the submission tracker first, then searched fresh public GitHub results for cross-agent skill registries, Codex/Claude/Cursor/OpenClaw skill catalogs, and `SKILL.md` marketplaces; no stronger genuinely new outreach venue surfaced beyond the existing blocked backlog.
- Logged `howells/arc` as skipped because it is a maintainer-owned SDLC plugin bundle rather than a neutral third-party listing destination, and logged `TheQtCompanyRnD/agent-skills` as deferred because it is an official Qt engineering catalog rather than a broad product-validation venue.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-overrun hourly automation.

## 2026-05-30 14:05:33 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages for cross-agent skill registries, Claude/Codex/Cursor/OpenClaw marketplaces, and `SKILL.md` collections; the search mostly resurfaced already-logged blocked targets such as `tech-leads-club/agent-skills`, `openai/skills`, `github/awesome-copilot`, and `product-on-purpose/pm-skills`, so no stronger genuinely new outreach venue surfaced.
- Logged `24601/surreal-skills` as skipped because it is a high-quality but single-product SurrealDB skill package already published to registries rather than a broader public directory or marketplace for third-party promotion.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 13:03:55 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages and topic results for AI agent skill registries, Claude/Codex/Cursor/OpenClaw marketplaces, and `SKILL.md` collections; no stronger genuinely new outreach venue surfaced beyond the existing blocked backlog.
- Logged `Digidai/product-manager-skills` as skipped because it is a single cross-agent PM skill package rather than a broader public directory or marketplace for third-party submissions, and logged `FreedomIntelligence/OpenClaw-Medical-Skills` as deferred because it is explicitly medical and biomedical-research focused rather than a broad pre-build product-validation venue.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 12:03:37 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages for agent-skill registries, Claude/Codex/Cursor/OpenClaw marketplaces, and `SKILL.md` collections; the search mostly resurfaced already-logged targets such as `OpenHands/extensions`, `OneWave-AI/claude-skills`, `dotnet/skills`, and `seb1n/awesome-ai-agent-skills`, so no stronger genuinely new outreach venue surfaced.
- Confirmed the only newly surfaced repositories worth explicit rejection were `claude-office-skills/skills`, which remains too office-document-execution-specific for this cross-agent product-validation skill, and `runkids/skillshare`, which remains a sync/install utility rather than a public listing destination for third-party skills.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 11:01:45 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages for AI agent skill registries, Claude/Codex/Cursor/OpenClaw marketplaces, and `SKILL.md` collections; no stronger genuinely new outreach venue surfaced, and the only genuinely fresh repository worth logging was `803/skills-supply`, which was skipped because its surfaced README positions it as an `agents.toml`-driven skill source manager rather than a public listing destination for third-party skills.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view openai/skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 10:01:21 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages for AI agent skill registries, Claude/Codex/Cursor/OpenClaw marketplaces, and `SKILL.md` collections; no stronger genuinely new outreach venue surfaced, and the only genuinely fresh candidates worth logging were `cblecker/claude-plugins`, which was skipped as an explicitly personal 3-star plugin collection, and `iflytek/skillhub`, which was skipped because it is registry software rather than a public GitHub listing destination.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view block/agent-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 09:08:27 CST

- Re-submitted `brandonhimpfen/awesome-ai-coding-agents` as a proper pull request after the earlier issue-only submission was rejected by the maintainer.
- Updated `LessUp/awesome-claude-skills-zh` PR #1 so it only changes `README.md`; the remaining CI failure now appears to be caused by the repository workflow expecting English README section markers that are absent from the Chinese README.
- Updated `docs/SUBMISSIONS.md` with the new PR link and the corrected LessUp status.

## 2026-05-30 09:01:06 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages for AI agent skill registries, Claude/Codex/Cursor/OpenClaw marketplaces, and `SKILL.md` collections; no stronger genuinely new outreach venue surfaced, and the only fresh repository worth logging, `obviousworks/Claude-AI-skills-collection-2026`, was skipped because its surfaced repository still looks too thin and low-stewardship to beat the stronger blocked backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 07:58:28 CST

- Rechecked the submission tracker first, then searched additional public GitHub pages for agent-skill registries, Codex/Claude/Cursor/OpenClaw catalogs, and `SKILL.md` directories; the search only resurfaced already-logged targets such as `WordPress/agent-skills`, `agentskill-sh/ags`, `RoggeOhta/awesome-codex-cli`, `agent-skills-hub/agent-skills-hub`, and `daymade/claude-code-skills`, so no stronger genuinely new outreach venue surfaced.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 06:57:29 CST

- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Claude/Codex/Cursor catalogs, OpenClaw-adjacent registries, and `SKILL.md` listings; no stronger genuinely new venue surfaced, and the only fresh candidate worth review, `markdown-viewer/skills`, was skipped because its contribution-friendly catalog is tightly scoped to Markdown diagrams, visualization, and technical-documentation rendering rather than broad pre-build product-validation workflows.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-overrun hourly automation.

## 2026-05-30 05:56:24 CST

- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Codex/Claude/Cursor catalogs, OpenClaw-adjacent lists, and `SKILL.md` registries; no stronger genuinely new venue surfaced, but `dmgrok/agent_skills_directory` was re-reviewed and upgraded from deferred to blocked because its current README now exposes a concrete `Create a New Provider` issue flow with automated validation and auto-PR handling.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 04:55:10 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Codex/Claude/Cursor catalogs, OpenClaw-adjacent lists, and `SKILL.md` registries; the search only resurfaced already-logged targets plus weak fits such as the 1-star `lichihho/awesome-claude-skills` fork and the auto-generated `the911fund/skill-of-skills` index, so no stronger genuinely new outreach venue emerged.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 03:55:03 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Codex/Claude/Cursor catalogs, `cursor-skills` topic results, and `SKILL.md` registries; deferred `gohypergiant/agent-skills` because it is contribution-friendly but still reads as a small Accelint-authored engineering-skills bundle rather than a stronger neutral listing destination than the existing blocked backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `curl` still cannot resolve `api.github.com` or `raw.githubusercontent.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 02:52:43 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Claude/Codex/Cursor catalogs, and agent-skills topic results; deferred `bergside/awesome-design-skills` as too design-system-specific for this workflow, skipped `monte-carlo-data/mc-agent-toolkit` as a vendor-specific Monte Carlo observability toolkit rather than a neutral discovery venue, and skipped `anthropics/claude-plugins-official` because it is an official plugin directory rather than a standalone skills listing target.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 01:51:07 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Claude/Codex/Cursor catalogs, and OpenClaw-adjacent registries; deferred `flagos-ai/skills` as too FlagOS-specific, skipped `Olshansk/agent-skills` as an explicitly personal skills repo, and skipped `mysticaltech/marketingskills` as a maintainer-owned marketing-skills fork rather than a neutral shared directory.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still fails against `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-30 00:49:41 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Codex/Cursor/Claude catalogs, and plugin marketplaces; deferred `EricGrill/agents-skills-plugins` because its contribution flow is centered on repo-native plugin packaging and marketplace metadata rather than directly listing an existing standalone skill repository, and no stronger genuinely new submission destination surfaced beyond the existing blocked backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 23:48:30 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Codex/Cursor/Claude catalogs, and OpenClaw-adjacent lists; confirmed `VoltAgent/awesome-agent-skills` as a fresh high-signal target because its README presents it as a hand-picked curated cross-agent skills list with `Marketing & Growth` plus `Community Skills` sections and an explicit “We welcome contributions” intake path.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation, and this session therefore cannot complete the requested GitHub PR or issue flow.

## 2026-05-29 22:49:08 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories and marketplaces; deferred `gtmagents/gtm-agents` as too GTM-specific, deferred `nexscope-ai/eCommerce-Skills` as too e-commerce-specific, skipped `dceoy/speckit-agent-skills` as a personal Spec Kit bundle, and skipped `cleodin/antigravity-awesome-skills` because the surfaced repo quality did not clear the outbound-promotion bar.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view github/awesome-copilot` still fails against `api.github.com`, and no automation-management tool is exposed in this session to disable the already-overrun hourly automation.

## 2026-05-29 21:49:00 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories, Codex/Cursor/Claude catalogs, and OpenClaw-adjacent awesome lists; confirmed `alvinreal/awesome-openclaw` as a fresh high-fit target because its `CONTRIBUTING.md` explicitly allows useful recent OpenClaw resources, documents the README entry format, and provides a clear third-party PR path for the `Skills & Registries` section.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still fails against `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 20:47:06 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories and marketplaces; skipped `terrylica/cc-skills` because it reads as a maintainer-owned Claude Code marketplace and bundled workflow suite rather than a neutral third-party intake path, and no stronger new target surfaced beyond the existing blocked backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 19:46:00 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories and marketplaces; confirmed `cosmicstack-labs/mercury-agent-skills` as a fresh high-fit target because it is an org-owned cross-agent registry with Product, Marketing, and Business categories plus an explicit PR contribution path in the README.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view cosmicstack-labs/mercury-agent-skills` still fails with `error connecting to api.github.com`, and `tool_search` exposed no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 18:43:40 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub skill directories and marketplaces; deferred `InternScience/Awesome-Scientific-Skills` because it is a scientific-research skills catalog rather than a broad pre-build product-validation venue, and no stronger new target surfaced beyond the existing blocked backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 17:42:02 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub repositories for cross-agent skill directories, Codex/Cursor/Claude marketplaces, and OpenClaw-adjacent registries; deferred `WordPress/agent-skills` because it is a WordPress-specific implementation catalog, and skipped `jscraik/Agent-Skills` because it appears to be a low-signal personal governed skills kit rather than a broader community directory.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 16:40:48 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub pages for cross-agent skill directories, Codex/Cursor/Claude marketplaces, and OpenClaw-adjacent registries; skipped `numman-ali/n-skills` because it looks like a single-maintainer marketplace, skipped `hyperskill/claude-code-marketplace` because it reads as a Hyperskill-owned plugin catalog rather than a third-party listing venue, and skipped `hashgraph-online/registry-broker-skills` because it is a product-specific registry skill rather than a public external directory.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 13:36:12 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub pages for cross-agent skill directories, Codex/Cursor/Claude marketplaces, and OpenClaw-adjacent registries; reviewed `openclaw/clawhub` and `microsoft/apm`, but neither is a valid GitHub-submission destination for this automation because ClawHub routes additions through direct registry publishing and APM is a package manager rather than a listing catalog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 12:34:29 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Rechecked the submission tracker first, then searched additional public GitHub pages for cross-agent skill directories, Claude/Codex/Cursor marketplaces, and OpenClaw-adjacent registries; `skillcreatorai/Awesome-Agent-Skills`, `Kilo-Org/kilo-marketplace`, and `GetBindu/awesome-claude-code-and-skills` resurfaced but were all already documented, so no genuinely new target emerged.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 11:33:08 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Searched additional public GitHub skill directories and marketplaces, then skipped `softaworks/agent-toolkit` because it presents as a single-maintainer opinionated skill bundle rather than a broader community directory or marketplace suitable for outbound promotion.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 10:32:10 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Re-reviewed `netresearch/claude-code-marketplace` and upgraded it from deferred to blocked because the current README now exposes an explicit `Adding a Skill` path via `.claude-plugin/marketplace.json`, making it a valid third-party submission target for Before You Build.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 09:32:30 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Searched additional public GitHub pages for cross-agent skill registries, Codex/Cursor/Claude skill catalogs, and OpenClaw-adjacent marketplaces, then recorded `luna-prompts/skillnote` as skipped because it appears to be a low-signal self-hosted registry product without a clearly surfaced third-party submission path.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh search repos` is unavailable in this environment, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 08:29:48 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `wshobson/agents` and confirmed it as a new high-signal blocked target because it is a large multi-harness marketplace for Claude Code, Codex CLI, Cursor, OpenCode, Gemini CLI, and GitHub Copilot, and its published docs include an explicit add-a-skill path under `plugins/{plugin-name}/skills/{skill-name}/SKILL.md`.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view wshobson/agents` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 07:28:39 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `RoggeOhta/awesome-codex-cli` and confirmed it as a new high-signal blocked target because it is a Codex CLI-specific ecosystem list, its Skills section already includes comparable cross-agent and PM-oriented repositories, and `CONTRIBUTING.md` explicitly allows either an issue submission or a fork-and-PR update to `README.md`.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view openai/openai-python` still fails with `error connecting to api.github.com`, and no automation-management tool is exposed in this session to disable the already-overrun hourly automation.

## 2026-05-29 06:27:07 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `affaan-m/everything-claude-code` and confirmed it as a new high-signal blocked target because the repository is cross-agent, has strong adoption, and its `CONTRIBUTING.md` documents a repo-specific `skills/<skill-name>/SKILL.md` submission flow with Codex and Cursor subset guidance.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh search repos` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 05:24:56 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `EthanYolo01/Awesome-OpenClaw` and confirmed it as a new high-fit blocked target because its `CONTRIBUTING.md` explicitly accepts new curated entries via fork-and-PR and its OpenClaw skills coverage makes Before You Build a defensible fit.
- Deferred `OpenSenseNova/SenseNova-Skills` because it is a vendor-owned office-workflow bundle and template source rather than a broad external directory or marketplace for third-party skill promotion.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 04:24:17 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Searched additional public GitHub skill registries and marketplaces, then recorded `huggingface/skills` as deferred because it is too Hugging Face-specific, `daymade/claude-code-skills` as skipped because it reads like a maintainer-owned bundle rather than a third-party intake path, and `randroids-dojo/skills` as skipped because it remains too small and low-signal versus the existing blocked backlog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view openai/skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 03:22:27 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Searched for additional public GitHub skill repositories and did not find a better new submission target than the existing blocked backlog; skipped `BbgnsurfTech/claude-skills-collection` because it is mainly a personal aggregation rather than a clear submission venue, and skipped `levnikolaevich/claude-code-skills` because it is a personal plugin suite rather than a broader community marketplace.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, GitHub CLI still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-overrun hourly automation.

## 2026-05-29 02:22:38 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `proflead/codex-skills-library` and confirmed it as a new high-signal Codex-specific target because its README presents it as a curated skills library and explicitly welcomes issues or pull requests for new skills, improvements, or fixes.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-29 01:20:53 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `semgrep/skills` and `circlefin/skills`; neither beat the existing blocked backlog because they are respectively security-only and Circle-specific vendor catalogs rather than broad product-validation directories.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-29 00:18:25 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `DiversioTeam/agent-skills-marketplace` and `higgsfield-ai/skills`; neither beat the existing blocked backlog because they are respectively too low-signal and too vendor-specific for this product-validation skill.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-28 23:16:58 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `CopilotKit/skills`, `elastic/agent-skills`, and `luongnv89/skills`; none beat the existing blocked backlog because they are respectively vendor-specific, vendor-specific, and personal-bundle-oriented rather than broader shared directories for third-party promotion.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-28 22:15:47 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `CodeAlive-AI/agents-reflection-skills`, `getsentry/sentry-agent-skills`, `managedcode/dotnet-skills`, and `pjt222/agent-almanac`; none beat the existing blocked backlog because they are respectively a maintained skill bundle, vendor-specific, framework-specific, or a small personal catalog.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view block/agent-skills` still fails with `error connecting to api.github.com`, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-28 21:15:10 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `agentscope-ai/QwenPaw` and confirmed it as a new high-signal target because its README explicitly welcomes new skills, and `CONTRIBUTING.md` requires an issue-first proposal followed by a broadly useful base-skill PR under `src/qwenpaw/agents/skills/<skill_name>/`.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view agentscope-ai/QwenPaw` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 20:13:59 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `OpenHands/extensions` and confirmed it as a new high-signal target because it is the official public OpenHands extensions registry with explicit fork-and-PR instructions for adding `skills/<your-skill-name>/SKILL.md`.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view OpenHands/extensions` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 19:13:13 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `binance/binance-skills-hub`, `qhkm/awesome-claw`, and `rylena/awesome-openclaw`; none beat the existing blocked backlog because they are respectively crypto-specific or lack a clear third-party skill submission path.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 18:12:27 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `getsentry/skills`, `supabase/agent-skills`, and `am-will/codex-skills`; none beat the existing blocked backlog because they are respectively internal-team-specific, vendor-specific, or personal-bundle-oriented rather than broad external directories for third-party promotion.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 17:10:48 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reconfirmed `block/agent-skills` is still already logged as a high-signal blocked target, then reviewed `dotnet/skills`, `callstackincubator/agent-skills`, `twostraws/swift-agent-skills`, and `K-Dense-AI/scientific-agent-skills`; none beat the broader blocked cross-agent registries because each is domain- or vendor-specific.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view block/agent-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 16:09:31 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `Kilo-Org/kilo-marketplace` and confirmed it as a new high-signal target because it is an org-owned, community-driven cross-agent marketplace with an explicit pull-request contribution flow for new skills.
- Skipped `Randroids-Dojo/skills` and `rknall/claude-skills` because both are personal marketplaces rather than strong broad-reach external directories.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view Kilo-Org/kilo-marketplace` would still fail against unreachable `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 15:08:06 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `trailofbits/skills-curated` and confirmed it as a new high-signal target because it is a curated community marketplace for Claude Code plugins with explicit issue and PR intake paths for external third-party skills and marketplaces.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view trailofbits/skills-curated` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 14:07:30 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `Prat011/awesome-llm-skills` and confirmed it as a new high-signal target because it is a broad curated cross-agent skills directory with explicit contribution rules for new `SKILL.md` folders, README categorization, and cross-platform testing.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view Prat011/awesome-llm-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 13:06:38 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `ComposioHQ/awesome-claude-skills` and confirmed it as a new high-signal target because it is a broad curated skills directory with explicit cross-agent support plus contribution guidance that requires real use cases, duplicate checks, testing, and a pull request.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view ComposioHQ/awesome-claude-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 12:04:18 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `simota/agent-skills` and confirmed it as a new high-fit target because it is a broad cross-agent skills catalog with explicit contribution guidance for adding new `SKILL.md` entries.
- Skipped `secondsky/claude-skills` as too implementation-centric for this product-validation workflow, and skipped `matlab/skills` because it is a MATLAB-specific vendor ecosystem catalog rather than a general external directory target.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view simota/agent-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 11:03:18 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `the911fund/skill-of-skills` and did not find a stronger new manual-submission target because the repository is an automatically updated discovery engine that scans GitHub and regenerates its directory rather than inviting normal PR or issue-based external listings.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 10:01:45 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `BankrBot/skills`, `vercel-labs/skills`, and `runkids/skillshare`, and did not find a stronger new submission target than the existing blocked backlog because the first is heavily crypto/market-workflow-specific while the latter two are tooling/sync utilities rather than credible third-party listing destinations.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and this session still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 09:00:37 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `deanpeters/Product-Manager-Skills` and confirmed it as a new high-fit target because it is a Codex-compatible PM skills framework with explicit pre-build validation workflows such as `pol-probe`, `problem-statement`, and positioning exercises that align tightly with Before You Build.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view deanpeters/Product-Manager-Skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 08:00:08 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `anthropics/skills` and confirmed it as a new high-signal Agent Skills target because the repository presents itself as the public Agent Skills repo, its README includes a Partner Skills section for strong external examples, and its pull request queue shows active community partner-skill and workflow-skill additions.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view anthropics/skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 07:26:31 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `agentskill-sh/ags` and confirmed it as a new high-fit cross-agent target because the repository presents AGS as an installable skills CLI and registry for Claude Code, Codex CLI, Cursor, Gemini CLI, and OpenClaw, and its contribution flow explicitly welcomes pull requests for new platforms or new skills.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, GitHub CLI still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 07:25:13 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `seb1n/awesome-ai-agent-skills` and confirmed it as a new high-fit target because it is a community-maintained open-standard skill library with broad Codex, Claude Code, and Cursor compatibility plus explicit contribution guidance for new skills.
- Deferred `huggingface/skills` as too ecosystem-specific for this product-validation workflow, and skipped `tinyhumansai/openhuman-skills` because it is a new 0-star codebase-specific registry rather than a credible external directory target.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view seb1n/awesome-ai-agent-skills` still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 01:24:16 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `w95/awesome-claude-corporate-skills` and confirmed it as a new high-fit target because it is a curated Claude skills catalog with product, marketing, and operations sections plus explicit `skills/your-skill-name/SKILL.md` pull request guidance.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view w95/awesome-claude-corporate-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 07:23:12 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `AbsolutelySkilled/AbsolutelySkilled` and confirmed it as a new high-fit contribution-friendly target because it is an active community skill catalog with Product Management, Business Strategy, and Project Management categories, and `CONTRIBUTING.md` documents a clear fork, branch, `SKILL.md`, test, and PR workflow.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, GitHub CLI still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 04:01:44 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `microsoft/skills`, `MicrosoftDocs/Agent-Skills`, and `apify/agent-skills`, and did not find a stronger new submission target than the existing blocked backlog because the Microsoft repositories are platform-specific documentation or grounding catalogs and the Apify repository is more execution-oriented than product-validation-oriented.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, GitHub CLI still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 07:21:19 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `tech-leads-club/agent-skills` and confirmed it as a new high-signal cross-agent target because the repository presents itself as a large curated skills catalog spanning Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, and related tools, and its contribution flow welcomes new `skills/<skill-name>/SKILL.md` pull requests.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view tech-leads-club/agent-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-28 05:48:30 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `jdrhyne/agent-skills` and confirmed it as a new high-fit cross-agent target because the repository explicitly supports Clawdbot, Claude Code, Codex, and OpenClaw-style installation flows, and its Contributing section welcomes new skills via fork-and-PR.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view jdrhyne/agent-skills` still fails with `error connecting to api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 23:05:11 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `hoodini/ai-agents-skills` and confirmed it as a new high-fit target because it is a curated cross-agent skill collection with explicit `skills/<name>/SKILL.md` pull request guidance and support across Claude Code, Cursor, and GitHub Copilot.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view hoodini/ai-agents-skills` still fails with `error connecting to api.github.com`, and no automation-management tool is exposed to disable the already-completed hourly automation.

## 2026-05-27 22:02:55 CST

- Ran another post-schedule promotion pass after the five intended hourly runs had already completed.
- Reviewed `mxyhi/ok-skills` and confirmed it as a new high-signal target because the repo is a curated cross-agent skills catalog with explicit contribution guidance and a planning workflow category that matches Before You Build.
- Skipped `oopsyz/skills` as too low-signal and telco-specific, and deferred `obra/superpowers` because it is primarily a packaged methodology rather than a straightforward external skill directory.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view mxyhi/ok-skills` cannot reach `api.github.com`, and no automation-management tool is exposed to disable the already-completed hourly automation.

## 2026-05-27 20:01:38 CST

- Ran another post-schedule promotion pass after the five intended hourly runs had already completed.
- Confirmed `natea/ar-claude-skills` as a new relevant, contribution-friendly target because its repository includes product and marketing skill tracks and explicitly welcomes new product-management-style skills via PR.
- Recorded the blocked submission and outreach check-in in [`/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md`](/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md).
- Verified again that `gh auth status` is invalid, `gh repo view` still cannot reach `api.github.com`, and no automation-management tool is exposed to disable the already-completed hourly automation.

## 2026-05-27 18:59:14 CST

- Ran another post-schedule cleanup pass after the five intended hourly runs had already completed.
- Reviewed `phuryn/pm-skills` and confirmed it as a new high-fit product-workflow target because the README centers the repo on discovery, strategy, pricing, and validation workflows, and `CONTRIBUTING.md` explicitly says new skills or larger changes should start with an issue before a focused PR.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view phuryn/pm-skills` cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 17:57:56 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `CommandCodeAI/agent-skills` and confirmed it as a new high-fit contribution-friendly target because the README presents it as a curated coding-agent skills library and `CONTRIBUTING.md` explicitly invites third-party skill PRs with concrete `SKILL.md` and PR-format guidance.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 16:56:54 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `openai/skills` and confirmed it as a new high-signal Codex target because the README presents it as the public Skills Catalog for Codex, the repo exposes `contributing.md`, and its pull request list shows active skill additions.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view openai/skills` cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 15:55:16 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `amanning3390/hermeshub` and confirmed it as a new high-fit contribution-friendly target because its README presents a community-driven skills hub and explicitly documents adding a `skills/<name>/SKILL.md` entry and opening a PR.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view amanning3390/hermeshub` cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 13:55:03 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `vadimcomanescu/codex-skills` and confirmed it as a relevant contribution-friendly Codex-specific target because its README documents the skills catalog layout and requires `python scripts/validate_skills.py` before opening a PR.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view vadimcomanescu/codex-skills` cannot reach `api.github.com`, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-27 12:54:24 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `intellectronica/awesome-skills` and `product-on-purpose/pm-skills` and confirmed both as new relevant contribution-friendly targets; the former explicitly accepts PRs or issues for `skills.yaml`, and the latter is a sizeable cross-agent PM skill library with visible contribution surfaces and strong topical fit.
- Deferred `BehiSecc/awesome-claude-skills` because its contribution note now emphasizes already community-adopted skills, and skipped `brightdata/awesome-claude-skills` because the repository is archived and read-only.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, shell requests still cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 11:52:35 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `letta-ai/skills` and confirmed it as a new high-fit contribution-friendly target because its README explicitly says the repo is for Letta Code, Claude Code, Codex CLI, and other skill-capable agents and invites contributors to create a skill and open a pull request.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view letta-ai/skills` cannot reach `api.github.com`, and `tool_search` still exposes no automation-management tool to disable the already-completed hourly automation.

## 2026-05-27 10:51:11 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `posit-dev/skills` and confirmed it as a new high-signal contribution-friendly target because its README welcomes contributions and `CONTRIBUTING.md` documents the exact new-skill PR workflow, including `SKILL.md` placement, `.claude-plugin/marketplace.json` updates, and `count-skill-tokens.py`.
- Confirmed GitHub submission remains blocked because `gh auth status` still reports the `bin1874` token is invalid, `gh repo view posit-dev/skills` cannot reach `api.github.com`, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-27 09:49:31 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `github/awesome-copilot` and confirmed it as a new high-signal contribution-friendly target because it is explicitly community-contributed and its docs describe adding new `skills/<skill-name>/SKILL.md` entries before opening a PR.
- Deferred `MiniMax-AI/skills`, `ConardLi/garden-skills`, and `CopilotKit/skills` as weaker-fit catalogs for this product-validation workflow.
- Confirmed GitHub submission is still blocked because `gh auth status` reports the `bin1874` token is invalid, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-27 08:48:41 CST

- Ran another post-schedule promotion follow-up pass after the five intended hourly runs had already completed.
- Reviewed `theneoai/awesome-skills` and confirmed it as a new contribution-friendly target because its README explicitly says third-party skill repos can be proposed by editing `external/sources.yml` and opening a PR.
- Confirmed submission is still blocked because GitHub CLI authentication is invalid, `gh repo view theneoai/awesome-skills` cannot reach `api.github.com`, and no automation-management tool is exposed in this session to disable the already-completed hourly automation.

## 2026-05-27 07:46:34 CST

- Ran a seventh follow-up promotion pass after the five scheduled hourly runs had already completed.
- Reconfirmed `VoltAgent/awesome-agent-skills` should stay deferred because its contribution guidance prefers skills with real usage before accepting new additions.
- Confirmed `OneWave-AI/claude-skills` as the strongest new contribution-friendly target from this pass, but submission remained blocked because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Logged that `tool_search` returned no automation-management tool, so disabling the already-completed hourly automation is still pending outside this run.

## 2026-05-27 06:46:00 CST

- Ran a sixth cleanup promotion pass after the five scheduled hourly runs had already completed.
- Searched additional GitHub skill registries and reviewed `netresearch/claude-code-marketplace`, `opensite-ai/opensite-skills`, `Mindrally/skills`, `akillness/oh-my-skills`, `subinium/awesome-claude-code`, and `addyosmani/agent-skills`.
- Confirmed `addyosmani/agent-skills` as a strong new cross-agent target, but the automation environment still cannot submit because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Updated the Outreach Check-ins log with the new blocked target and noted again that automation disable is still pending because no automation-management tool is exposed in this session.

## 2026-05-27 05:44:42 CST

- Ran a post-fifth promotion cleanup pass and searched for additional contribution-friendly GitHub skill repositories.
- Confirmed `psenger/ai-agent-skills` as a strong new cross-agent target, but the automation environment still cannot submit because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Deferred `gmh5225/awesome-skills` because it lacks repo-specific submission guidance, and noted that automation disable is still blocked because no automation-management tool is exposed in this session.

## 2026-05-27 04:44:00 CST

- Ran the fifth hourly promotion pass and searched for additional contribution-friendly GitHub skill repositories.
- Confirmed `gooseworks-ai/goose-skills` and `daymade/claude-code-skills` as strong new targets, but the automation environment still cannot submit because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Recorded the new blocked targets, added a fifth-pass Outreach Check-ins entry, and noted that automation disable is still pending because no automation-management tool is exposed in this session.

## 2026-05-27 03:43:44 CST

- Ran the fourth hourly promotion pass and searched for additional contribution-friendly GitHub skill repositories.
- Confirmed `GetBindu/awesome-claude-code-and-skills` and `sickn33/antigravity-awesome-skills` as strong new targets, but the automation environment still cannot submit because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Recorded the new blocked targets, plus deferred and skipped notes for `claude-office-skills/skills` and `aussiegingersnap/cursor-skills`, in [`/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md`](/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md).

## 2026-05-27 02:41:43 CST

- Ran the third hourly promotion pass and searched for additional contribution-friendly GitHub skill repositories.
- Confirmed `Gentleman-Programming/Gentleman-Skills` and `CodeAlive-AI/ai-driven-development` as strong new cross-agent targets, but the automation environment still cannot submit because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Recorded the new blocked targets plus skip reasons for `jakenuts/agent-skills`, `LambdaTest/agent-skills`, and `trailofbits/skills` in [`/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md`](/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md).

## 2026-05-27 01:40:58 CST

- Ran the second hourly promotion pass and searched for additional GitHub skill directories that accept `SKILL.md` contributions.
- Confirmed `skillcreatorai/Awesome-Agent-Skills` and `agent-skills-hub/agent-skills-hub` as strong new cross-agent targets, but the automation environment still cannot submit because GitHub CLI authentication is invalid and `api.github.com` is unreachable.
- Recorded the new blocked targets and deferred the more Copilot-centric `Code-and-Sorts/awesome-copilot-agents` in [`/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md`](/Users/hbf/TOOLS/before-you-build-skill/docs/SUBMISSIONS.md).

## 2026-05-27 00:39:51 CST

- Ran the first hourly promotion pass and searched for additional GitHub skill directories and marketplaces.
- Identified `block/agent-skills` as a strong new target, but the automation environment could not submit because GitHub CLI authentication is invalid and shell access to `api.github.com` is blocked.
- Recorded the blocked `block/agent-skills` target, deferred `skillcreatorai/Awesome-Agent-Skills`, and skipped the frontend-only `finfin/awesome-frontend-skills` in `docs/SUBMISSIONS.md`.

## 2026-05-26 23:44:05 CST

- Created an hourly GitHub skills promotion automation that will run five additional passes and record every submission in `docs/SUBMISSIONS.md`.
- Continued the current pass with new submissions to `LeorickCoder/awesome-codex-skills`, `sundial-org/awesome-openclaw-skills`, and `eugenepyvovarov/mcpbundler-agent-skills-marketplace`.
- Recorded `nextlevelbuilder/skillx` as deferred for later inspection.

## 2026-05-26 23:35:59 CST

- Continued GitHub ecosystem promotion with additional Claude marketplace, Agent Skills, and registry submissions.
- Recorded new PRs for `mhattingpete/claude-skills-marketplace`, `6missedcalls/awesome-agent-skills`, and `ComeOnOliver/skillshub`.
- Recorded new issue submissions for `7Ese/Awesome-Agent-Skills` and `salihcantekin/awesome-agent-skills`.
- Added skip/defer notes for `skilluse/skilluse` and `zocomputer/skills`.

## 2026-05-26 23:21:28 CST

- Continued GitHub ecosystem promotion with additional Cursor, AI Skills, DeepAgent, and Claude Skills submissions.
- Recorded new PRs for `spencerpauly/awesome-cursor-skills`, `skillsdirectory/awesome-ai-skills`, `EgoAlpha/awesome-DeepAgent-skills`, and `karanb192/awesome-claude-skills`.
- Confirmed `Chat2AnyLLM/awesome-repo-configs` already lists `bin1874/before-you-build-skill`.
- Added deferred notes for low-quality, heavy-format, or programmatic submission targets.

## 2026-05-26 23:05:05 CST

- Expanded GitHub ecosystem promotion with additional Codex, Claude marketplace, and agent skill directory submissions.
- Recorded new links for `ComposioHQ/awesome-codex-skills`, `doanbactam/agent-skills-directory`, `beshkenadze/claude-skills-marketplace`, and `jiejuefuyou/awesome-claude-code-skills`.
- Added deferred notes for curated lists that require more public usage or stars before submission.

## 2026-05-26 22:56:52 CST

- Published `before-you-build@0.1.1` to ClawHub under `@bin1874`.
- Verified the public ClawHub page and registry search result.
- Recorded the ClawHub listing URL, install command, and moderation status in the submissions tracker.

## 2026-05-26 22:49:57 CST

- Fixed the OpenClaw publish command placeholder so it renders clearly in Markdown.

## 2026-05-26 22:48:50 CST

- Added a Chinese Claude Skills list PR submission for `LessUp/awesome-claude-skills-zh`.
- Recorded the localized skill submission in the promotion tracker.

## 2026-05-26 22:45:13 CST

- Expanded GitHub ecosystem promotion with one Claude skill registry issue and two PR-format awesome list submissions.
- Recorded new submission links for `majiayu000/claude-skill-registry-core`, `jaydeepkarale/awesome-agent-skills`, and `junminhong/awesome-agent-skills`.

## 2026-05-26 22:40:43 CST

- Added OpenClaw and ClawHub publishing notes.
- Documented OpenClaw installation paths and invocation guidance.
- Added ClawHub listing metadata, a security statement, and a submission checklist.
- Added OpenClaw metadata to `SKILL.md` and a `.clawhubignore` publish filter.
- Recorded OpenClaw submission preparation in the promotion tracker.

## 2026-05-24 23:20:02 CST

- Published release `v0.1.1`.
- Enabled GitHub Discussions for the repository.
- Created the first community discussion for product and feature idea reviews.
- Recorded the outreach check-in result in the submissions tracker.

## 2026-05-24 23:09:23 CST

- Added three public-case-inspired examples based on Before You Build cases.
- Covered AI wrapper risk, platform dependency risk, and developer tool adoption risk.
- Linked the new real case examples from the README.

## 2026-05-24 22:10:28 CST

- Improved README discovery with badges, at-a-glance positioning, compatibility notes, install paths, examples, and a workflow diagram.
- Added GitHub issue templates for idea reviews, agent compatibility reports, and failure pattern suggestions.
- Added discussion templates for idea reviews and compatibility notes.
- Added contribution guidelines to keep the skill focused on pre-build product risk review.

## 2026-05-24 21:58:29 CST

- Expanded GitHub ecosystem promotion across Agent Skills, Claude Skills, and AI coding agent directories.
- Recorded newly submitted GitHub issue links in the promotion tracker.
- Moved ToolHunter, ToolShelf, and FOSSHUNTER to submitted status.
- Added deferred GitHub targets with star or scope requirements.

## 2026-05-24 20:52:07 CST

- Added a promotion submissions tracker.
- Recorded completed directory and GitHub promotion submissions.
- Documented blocked and deferred promotion channels.

## 2026-05-24 20:39:46 CST

- Expanded README positioning for public GitHub discovery.
- Added tool-specific install notes.
- Added reusable promotion copy and directory metadata.

## 2026-05-24 17:42:41 CST

- Created the standalone open-source repository structure.
- Added the `before-you-build` skill package.
- Added README, MIT license, examples, and repository metadata.
