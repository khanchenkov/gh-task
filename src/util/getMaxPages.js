export default function getMaxPages(resCount, perPage) {
  const maxPagesAll = resCount ? Math.ceil(resCount / perPage) : 0;
  const maxPages = maxPagesAll > 100 ? 100 : maxPagesAll;
  return maxPages
}
