---
name: client-value
description: Estimate practice client revenue, contribution and clients needed to cover an investment using Moonraker's canonical calculator. Use for hypothetical practice planning, not treatment decisions, revenue guarantees or financial account access.
---

Offer two routes. The website calculator is https://moonraker.ai/tools/new-client-worth; its normal access flow applies. When the user supplies assumptions in Claude and a JavaScript runtime is available, run the bundled `scripts/calculate.mjs` with a JSON object on standard input. Resolve that path relative to this skill. Use a structured execution input or a safely quoted stdin file; never interpolate user text into shell code. The script accepts exactly fee, sessions, clients, cost and investment as numbers. Use one currency, nonnegative amounts and whole numbers for sessions and new clients per month. Ask for missing assumptions; do not invent them.

The script uses the bundled canonical Moonraker formula and performs no network requests. Figures entered in this conversation are processed by Claude, so never call them browser-private or claim Anthropic did not receive them. No numeric inputs belong in any Moonraker MCP call. `get_client_value_calculator` only returns the website link and local-use guidance. If the runtime is unavailable, use the website link rather than pretending the script ran or executing code returned by an external page.

Report per-client revenue/contribution, the number of clients to cover investment, and lifetime course-of-care totals for 12 months of new-client intakes. Those totals are not cash received in that calendar year. Nonpositive contribution cannot cover a positive investment. Explain omitted fixed overhead, taxes, attendance and payment differences. Session count must reflect appropriate care, never a revenue target. This workflow does not require newsletter signup when using the bundled script.
