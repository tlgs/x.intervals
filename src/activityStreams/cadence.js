out: {
  const valid = new Set(['Run', 'Virtual Run', 'Trail Run']);
  if (!valid.has(activity.type)) {
    break out;
  }

  for (const [i, v] of icu.streams.cadence.entries()) {
    data[i] = v * 2;
  }
}
