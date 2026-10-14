# Moonraker Claude plugin data handling

Updated 14 October 2026. Public policy: https://agent.moonraker.ai/claude/privacy.

Claude processes the prompts, tool arguments, tool results and any figures you provide in the conversation under Anthropic's policies. Moonraker receives only the arguments needed by the tool you request. The connector does not read unrelated chats, files, cookies or browser history.

For website checks, Moonraker receives your first name, email, explicit newsletter agreement and public website origin. Listing Check also receives the public practice details you enter. The weekly newsletter is requested only after explicit agreement; existing preferences are respected and you can unsubscribe. Listing Check and Practice Website Audit send their report to the address you authorize. Other plugin checks do not request report emails. The underlying Moonraker services store reports and contact information according to https://moonraker.ai/privacy.

Practice audit IDs, access values and private report links pass through Claude so you can reopen and continue the same report. Anyone holding a complete private report link can open that report. Keep it within the intended audience. Clearing a chat does not delete Moonraker's server report or unsubscribe you.

The connector keeps at most 20 request receipts in memory to avoid repeating submitted operations. Receipts may contain returned report data and private audit access values. They expire after one hour and a sweep runs each minute to remove expired entries; restarting the service clears them. It does not write request bodies to application logs. The HTTPS proxy logs connection IP, request path, time, user agent and response status, without request bodies. For Claude tool calls the connection normally comes from Anthropic infrastructure. Files rotate at 10 MB, with at most five rotated files retained for up to 30 days. The active file remains until rotation. Underlying report and newsletter storage is separate from this short-lived connector memory.

Question tools send only profession and country selections. The client-value skill provides written formulas for conversational arithmetic; no executable calculator code or financial-input endpoint exists. Figures you type into Claude are still handled by Anthropic. The website calculator has its own access and privacy flow.

Do not submit patient information, clinical notes or private portal addresses. For data requests contact support@moonraker.ai. Disconnecting the plugin stops future calls; it does not delete reports, newsletter preferences or Claude history.
