// Efficiency Factor as GAP (meters per minute) over HR
function ef (start, end) {
  const speed = icu.streams.ga_velocity.slice(start, end);
  const hr = icu.streams.fixed_heartrate.slice(start, end);

  const avgSpeed = speed.reduce((a, b) => a + b, 0) / (end - start);
  const avgHR = hr.reduce((a, b) => a + b, 0) / (end - start);

  return (avgSpeed * 60) / avgHR;
}

out: {
  const valid = new Set(['Run', 'Virtual Run', 'Trail Run']);
  if (!valid.has(activity.type)) {
    break out;
  }

  const full = icu.streams.ga_velocity.length;
  const half = Math.trunc(full / 2);

  const [fst, snd] = [ef(0, half), ef(half, full)];
  1 - (snd / fst);
}
