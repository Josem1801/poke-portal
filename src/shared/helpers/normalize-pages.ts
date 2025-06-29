// for infinite query pages  to flatList data
type InfiniteResponseType<T> = {
  results: T[];
};

export function normalizePages<T>(pages: InfiniteResponseType<T>[]): T[] {
  const normalized: T[] = [];
  for (const page of pages) {
    normalized.push(...page.results);
  }
  return normalized;
}
