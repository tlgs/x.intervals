out: {
  const valid = new Set(['Run', 'Virtual Run', 'Trail Run']);
  if (!valid.has(activity.type)) {
    break out;
  }

  const t = activity.moving_time / 60;
  const v = activity.icu_distance / t;

  const vo2 = -4.6 + 0.182258 * v + 0.000104 * v ** 2;
  const pct = 0.8 + 0.1894393 * Math.exp(-0.012778 * t) + 0.2989558 * Math.exp(-0.1932605 * t);

  vo2 / pct;
}
