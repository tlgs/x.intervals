out: {
  const valid = new Set(['Run', 'Virtual Run', 'Trail Run']);
  if (!valid.has(activity.type)) {
    break out;
  }

  const speed = activity.gap * 60; // meters per minute
  speed / activity.average_heartrate;
}
