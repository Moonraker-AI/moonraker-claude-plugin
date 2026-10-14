// Lifetime course-of-care estimates, not cash receipts within a calendar year.
export function estimateClientValue({fee, sessions, clients, cost, investment}) {
  if (![fee, sessions, clients, cost, investment].every(n => Number.isFinite(n) && n >= 0) || !Number.isInteger(sessions) || !Number.isInteger(clients)) throw new Error('Invalid practice assumptions');
  const revenue = fee * sessions;
  const contribution = (fee - cost) * sessions;
  return { revenue, contribution, intakeRevenue: revenue * clients * 12, intakeContribution: contribution * clients * 12, clientsToCover: investment === 0 ? 0 : contribution > 0 ? Math.ceil(investment / contribution) : null };
}
