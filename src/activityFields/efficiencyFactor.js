out: {
  const valid = new Set(['Run', 'Virtual Run', 'Trail Run']);
  if (!valid.has(activity.type)) {
    break out;
  }

  if (activity.gap === null || activity.average_heartrate === null) {
    break out;
  }

  const speed = activity.gap * 60; // meters per minute
  speed / activity.average_heartrate;
}
