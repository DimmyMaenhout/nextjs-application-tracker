export function createSelectItems<T extends string>(
  values: T[],
  meta: Record<T, { label: string }>,
) {
  return values.map((value) => ({
    value,
    label: meta[value].label,
  }));
}
