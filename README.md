# Moonraker for Claude

Find out what needs attention on your practice website, check your public listings, plan useful content and estimate what a new client is worth. Moonraker combines six guided skills with a hosted connector for Claude chat, Cowork and Claude Code.

![Moonraker](assets/icon.png)

Free public beta. Published by Moonraker.AI, with support at support@moonraker.ai. The connector uses `https://agent.moonraker.ai/claude/mcp`.

| Workflow | What it does |
| --- | --- |
| AI Readiness | Technical readability checks, evidence and saved report |
| Listing Check | Public practice-detail comparison and report email |
| Page Clarity | Saved page-overlap check with explicit batch continuation |
| Practice Website Audit | Broader audit, private report link and report email |
| What Brings You In | Published questions by profession and country |
| Client Value | Written calculation steps or link to Moonraker's website calculator |

## Install

The public Claude Directory listing is not yet confirmed. Until it is published, install the plugin manually: download the plugin ZIP from this repository's [Releases](https://github.com/Moonraker-AI/moonraker-claude-plugin/releases), upload it through Claude's Customize > Plugins custom-upload option and connect Moonraker. No Moonraker account or API key is required. Claude plan and feature availability still apply.

For Claude Code, clone this repository and run `claude --plugin-dir /absolute/path/to/moonraker-claude-plugin`. For the connector alone, add `https://agent.moonraker.ai/claude/mcp` as a custom connector; the bundle supplies the six guided skills and client-value formulas.

The skills are `/moonraker:ai-readiness`, `/moonraker:listing-check`, `/moonraker:page-clarity`, `/moonraker:practice-audit`, `/moonraker:practice-questions` and `/moonraker:client-value`. You can also describe the task naturally. Client Value offers written calculation steps in chat and a link to the interactive website calculator.

## Try a first request

- "Check whether AI can read my public practice website. Explain what you need from me before starting."
- "Compare my practice's public contact details across listings."
- "Check whether pages on my website overlap and explain the evidence."
- "Run a practice website audit and give me the priorities with a saved report."
- "Show me the available professions and countries in What Brings You In, then help me choose questions for my website."
- "Help me estimate what a new client is worth. Ask me for the assumptions."

Start with one check. Claude will collect the details and permissions that check needs. Moonraker returns findings and reports; it does not edit your website or business listings. You decide which recommendations to act on.

## Before a website check

Website checks require the user's first name, email and explicit agreement to the free-tool newsletter offer. Listing Check and Practice Website Audit additionally require agreement to the report email. The question-library tools and conversational calculator do not subscribe anyone. No patient information, private portals or clinical advice is supported.

Saved checks advance through continuation calls and may also advance through background jobs. Completion is not guaranteed while a chat is idle. Keep the report link to resume later. Private audit links grant access and should not be shared publicly.

## Free beta limits

Capacity is shared across connector users and the website tools. The connector allows four active requests and retains up to 20 submission receipts per hour. Practice Website Audit currently allows three new audits per gateway IP per day, shared by all connector users, plus per-site and service-wide limits. A quota response means try again later; existing report links remain available. Cached results, partial coverage and provider delays are labeled. No unlimited-use or completion-time promise is made.

## Data and execution

The plugin sends only requested tool arguments to the declared Moonraker connector. The service calls Moonraker's public APIs at `https://clients.moonraker.ai/api/public/` to process checks, consent, saved reports and question-library reads. Check services fetch the public website and use their search, rendering, analysis and email providers as described in the [privacy policy](https://agent.moonraker.ai/claude/privacy). The Client Value skill provides written formulas for conversational arithmetic and a website calculator link. It includes no executable scripts, installs no dependencies and sends no numeric inputs to the connector. No hooks, background commands, credential readers or unrelated file access are included.

Figures entered in Claude are processed by Claude. The conversational calculation sends no numeric inputs to Moonraker. Source-only, incomplete and unavailable measurements remain labeled; this toolkit does not prove rankings, AI recommendations or full accessibility.

See [data handling](PRIVACY.md). Support: support@moonraker.ai.

## License

Moonraker retains ownership. Installation and use are permitted under the [Moonraker Plugin License](LICENSE); this is not an open-source license.
