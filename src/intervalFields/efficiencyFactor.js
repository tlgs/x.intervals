out: {
  const valid = new Set(['Run', 'Virtual Run', 'Trail Run']);
  if (!valid.has(activity.type)) {
    break out;
  }

  const speed = interval.gap * 60; // meters per minute
  speed / interval.average_heartrate;
}
