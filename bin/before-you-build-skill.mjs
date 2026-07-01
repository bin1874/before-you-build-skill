#!/usr/bin/env node

import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packageName = "before-you-build";

const copyExcludes = new Set([
  ".git",
  ".github",
  ".cursor",
  ".DS_Store",
  ".gemini",
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".env",
  ".env.local",
  "npm-debug.log",
  "yarn-error.log",
]);

const aliases = new Map([
  ["all", "all"],
  ["codex", "codex"],
  ["openai", "codex"],
  ["claude", "claude"],
  ["claude-code", "claude"],
  ["cursor", "cursor"],
  ["openclaw", "openclaw"],
  ["claw", "openclaw"],
  ["hermes", "hermes"],
  ["gemini", "gemini"],
  ["gemini-cli", "gemini"],
]);

const skillTargets = {
  codex: {
    label: "Codex",
    type: "skill-dir",
    dir: () => path.join(os.homedir(), ".codex", "skills", packageName),
  },
  claude: {
    label: "Claude Code",
    type: "skill-dir",
    dir: () => path.join(os.homedir(), ".claude", "skills", packageName),
  },
  openclaw: {
    label: "OpenClaw",
    type: "skill-dir",
    dir: () => path.join(os.homedir(), ".openclaw", "skills", packageName),
  },
  hermes: {
    label: "Hermes",
    type: "skill-dir",
    dir: () => path.join(os.homedir(), ".hermes", "skills", packageName),
  },
};

function usage() {
  return `Before You Build Skill installer

Usage:
  npx before-you-build-skill install <target> [--force] [--project] [--path <dir>]
  npx before-you-build-skill doctor

Targets:
  codex        Install to ~/.codex/skills/before-you-build
  claude       Install to ~/.claude/skills/before-you-build
  cursor       Write a project rule to .cursor/rules/before-you-build.md
  openclaw     Install to ~/.openclaw/skills/before-you-build
  hermes       Install to ~/.hermes/skills/before-you-build
  gemini       Install a Gemini CLI command and local skill reference
  all          Install codex, claude, openclaw, hermes, gemini, and cursor

Options:
  --force      Replace an existing install
  --project    Use the current project for project-aware targets
  --path DIR   Use DIR as the project root for cursor or project gemini installs

Examples:
  npx before-you-build-skill install codex
  npx before-you-build-skill install hermes
  npx before-you-build-skill install openclaw
  npx before-you-build-skill install gemini
  npx before-you-build-skill install cursor --path /path/to/project
  npx before-you-build-skill install all --force
`;
}

function parseArgs(argv) {
  const parsed = {
    command: argv[0] || "help",
    target: argv[1],
    force: false,
    project: false,
    projectPath: process.cwd(),
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--force" || arg === "-f") {
      parsed.force = true;
    } else if (arg === "--project") {
      parsed.project = true;
    } else if (arg === "--path") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error("--path requires a directory");
      }
      parsed.project = true;
      parsed.projectPath = path.resolve(value);
      i += 1;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return parsed;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureEmptyDestination(destination, force) {
  if (!(await pathExists(destination))) {
    return;
  }

  if (!force) {
    throw new Error(`${destination} already exists. Re-run with --force to replace it.`);
  }

  await fs.rm(destination, { recursive: true, force: true });
}

async function copyPackage(destination, force) {
  await ensureEmptyDestination(destination, force);
  await fs.mkdir(destination, { recursive: true });
  await copyDirectory(packageRoot, destination);
}

async function copyDirectory(source, destination) {
  const entries = await fs.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    if (copyExcludes.has(entry.name) || entry.name.endsWith(".tgz")) {
      continue;
    }

    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await fs.mkdir(to, { recursive: true });
      await copyDirectory(from, to);
    } else if (entry.isFile()) {
      await fs.copyFile(from, to);
    }
  }
}

async function installSkillDir(targetKey, options) {
  const target = skillTargets[targetKey];
  const destination = target.dir();
  await copyPackage(destination, options.force);
  return {
    label: target.label,
    path: destination,
    message: `${target.label}: installed to ${destination}`,
  };
}

async function installCursor(options) {
  const root = options.projectPath;
  const destination = path.join(root, ".cursor", "rules", "before-you-build.md");
  await ensureEmptyDestination(destination, options.force);
  await fs.mkdir(path.dirname(destination), { recursive: true });

  const skill = await fs.readFile(path.join(packageRoot, "SKILL.md"), "utf8");
  const content = `# Before You Build Skill

Use this project rule before implementing a new product idea, feature, scope change, SaaS idea, AI app, side project, or startup concept.

${skill}
`;

  await fs.writeFile(destination, content, "utf8");
  return {
    label: "Cursor",
    path: destination,
    message: `Cursor: wrote project rule to ${destination}`,
  };
}

async function installGemini(options) {
  const base = options.project
    ? path.resolve(options.projectPath, ".gemini")
    : path.join(os.homedir(), ".gemini");
  const skillDir = path.join(base, "skills", packageName);
  const commandFile = path.join(base, "commands", "before-you-build.toml");

  await copyPackage(skillDir, options.force);
  await ensureEmptyDestination(commandFile, options.force);
  await fs.mkdir(path.dirname(commandFile), { recursive: true });

  const skillPathForPrompt = options.project
    ? ".gemini/skills/before-you-build/SKILL.md"
    : "~/.gemini/skills/before-you-build/SKILL.md";

  const command = `description = "Review a product or feature idea before implementation."
prompt = """
Apply the Before You Build Skill before implementation.

Read the installed skill package at:
${skillPathForPrompt}

If file access is unavailable, follow this behavior:
Do not write code yet. First review the idea's target user, concrete scenario, current alternatives, demand risk, distribution risk, pricing risk, retention risk, trust risk, and likely failure patterns. Give a verdict: Build small, Validate first, Pivot first, or Don't build yet.

User request:
{{args}}
"""
`;

  await fs.writeFile(commandFile, command, "utf8");
  return {
    label: "Gemini CLI",
    path: commandFile,
    message: `Gemini CLI: installed command to ${commandFile} and skill to ${skillDir}`,
  };
}

async function installTarget(targetKey, options) {
  if (targetKey === "all") {
    const targets = ["codex", "claude", "openclaw", "hermes", "gemini", "cursor"];
    const results = [];
    for (const key of targets) {
      results.push(await installTarget(key, options));
    }
    return results.flat();
  }

  if (targetKey === "cursor") {
    return [await installCursor(options)];
  }

  if (targetKey === "gemini") {
    return [await installGemini(options)];
  }

  if (skillTargets[targetKey]) {
    return [await installSkillDir(targetKey, options)];
  }

  throw new Error(`Unsupported target: ${targetKey}`);
}

async function doctor() {
  const checks = [
    ["Package root", packageRoot],
    ["SKILL.md", path.join(packageRoot, "SKILL.md")],
    ["README.md", path.join(packageRoot, "README.md")],
    ["references", path.join(packageRoot, "references")],
    ["examples", path.join(packageRoot, "examples")],
  ];

  for (const [label, location] of checks) {
    const ok = await pathExists(location);
    console.log(`${ok ? "OK " : "ERR"} ${label}: ${location}`);
    if (!ok) {
      process.exitCode = 1;
    }
  }
}

async function main() {
  const argv = process.argv.slice(2);

  if (argv.length === 0 || argv.includes("--help") || argv.includes("-h")) {
    console.log(usage());
    return;
  }

  const options = parseArgs(argv);

  if (options.command === "doctor") {
    await doctor();
    return;
  }

  if (options.command !== "install") {
    throw new Error(`Unknown command: ${options.command}`);
  }

  if (!options.target) {
    throw new Error("install requires a target. Use --help to see supported targets.");
  }

  const target = aliases.get(options.target.toLowerCase());
  if (!target) {
    throw new Error(`Unknown install target: ${options.target}`);
  }

  const results = await installTarget(target, options);
  for (const result of results) {
    console.log(result.message);
  }
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
