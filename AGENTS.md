# oliveira.ninja Landing - Agent Guide

This repository powers the main landing page for `www.oliveira.ninja`.

## Branch Model

- `main` is reserved for the GitHub profile README.
- `gh-pages` contains the Astro landing page source and deploys through GitHub
  Pages Actions.
- Do not add a committed `CNAME` file. Custom domains are configured through
  GitHub Pages settings/API.

## Site Direction

The landing page should feel like a compact technical front door for Gabriel
Oliveira: application security, automation, DevSecOps, self-hosting, AI-assisted
engineering, infrastructure, and practical lab work.

Keep the portfolio/project section curated. Do not add old proof-of-concept
repositories just to fill space. Until strong current work exists, keep the
project area marked as under construction.

Future spotlight areas:

- AI Lab: vulnerabilities, auto-fixing, Hermes workflows, Langflow, agentic
  tooling, and honest notes on what worked or failed.
- Self-hosting / de-Google: replacing Google Photos, Drive, streaming, VPNs,
  sync, backups, and family-friendly services.
- Linux tinkering: desktop/server setup, scripts, fixes, and practical notes.
- DevOps field notes: OpenShift, Azure, Kubernetes, CI/CD, GitHub Actions, and
  security guardrails.
- Pentest playground: authorized labs, methodology, tooling, and remediation.
- Weekend projects: small, fun, educational builds.

## Content Rules

- Prefer links to polished blog writeups over raw repository links.
- Keep copy casual, direct, and technically credible.
- Avoid marketing-style claims. Explain what was built, why it mattered, and
  what was learned.
- Keep the landing page concise. Longer explanations belong on the blog.
- Use tags and links consistently with the blog:
  - `project-writeup`
  - `weekend-project`
  - `ai-lab`
  - `self-hosting`
  - `degoogle`
  - `linux`
  - `devops`
  - `openshift`
  - `azure`
  - `kubernetes`
  - `pentesting`

## Validation

- Run `pnpm build` before pushing landing page source changes.
- GitHub Pages deploys from Actions; verify the workflow after pushing.
- After deployment, smoke-check `https://www.oliveira.ninja/`.
