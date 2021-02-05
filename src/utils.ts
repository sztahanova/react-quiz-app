export function shuffle<T>(values: T[]): T[] {
  let j, x, i;

  for (i = values.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = values[i];
    values[i] = values[j];
    values[j] = x;
  }

  return values;
}
