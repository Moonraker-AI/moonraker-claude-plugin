---
name: client-value
description: Estimate practice client revenue, contribution and clients needed to cover an investment using Moonraker's calculator formulas. Use for hypothetical practice planning, not treatment decisions, revenue guarantees or financial account access.
---

Ask for fee per session, sessions per client, new clients per month, variable cost per session and investment. Use one currency, finite nonnegative amounts, and whole numbers for sessions and clients. Ask for missing assumptions; do not invent them.

For a conversational estimate, show the arithmetic using these exact formulas:
- Per-client revenue = fee times sessions.
- Per-client contribution = (fee minus variable cost) times sessions.
- Lifetime revenue for 12 months of new-client intakes = per-client revenue times new clients per month times 12.
- Lifetime contribution for those intakes = per-client contribution times new clients per month times 12.
- Clients needed to cover investment = investment divided by per-client contribution, rounded upward to a whole client. Zero investment needs zero clients. Nonpositive contribution cannot cover a positive investment.

This skill supplies written formulas, not executable code. Do not run or download scripts for this workflow. For an interactive calculator, offer https://moonraker.ai/tools/new-client-worth; its normal website access flow applies. The connector's `get_client_value_calculator` returns this link. No numeric inputs belong in any Moonraker MCP call. Figures supplied in Claude are processed by Anthropic; do not call them browser-private. Conversational estimates do not require newsletter signup.

Report assumptions and arithmetic clearly. These are lifetime course-of-care totals for 12 months of intakes, not cash received in that calendar year. Explain omitted fixed overhead, taxes, attendance and payment differences. Session count must reflect appropriate care, never a revenue target. Results are planning estimates, not guarantees.
