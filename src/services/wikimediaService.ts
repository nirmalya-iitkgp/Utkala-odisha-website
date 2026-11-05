export interface WikiSummaryResult {
  title: string;
  displayTitle: string;
  extract: string;
  thumbnailUrl?: string;
  originalImageUrl?: string;
  pageUrl: string;
  coordinates?: { lat: number; lon: number };
}

// In-memory cache to eliminate duplicate network calls
const cache = new Map<string, WikiSummaryResult>();

/**
 * Strips dangerous HTML tags and scripts to prevent XSS (Red-Pill/Blue-Pill Security)
 */
function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

/**
 * Safely fetches summary and high-resolution photography from Wikimedia/Wikipedia API
 */
export async function fetchWikiSummary(wikiTitle: string): Promise<WikiSummaryResult | null> {
  if (!wikiTitle) return null;

  let normalizedKey = wikiTitle.trim();
  try {
    normalizedKey = decodeURIComponent(normalizedKey);
  } catch {
    // Keep original if malformed URI sequence
  }
  if (cache.has(normalizedKey)) {
    return cache.get(normalizedKey)!;
  }

  const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalizedKey)}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch(endpoint, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'UtkalaOdishaHeritageMap/1.0 (Educational Spatial Explorer)'
      }
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const result: WikiSummaryResult = {
      title: sanitizeString(data.title || normalizedKey),
      displayTitle: sanitizeString(data.titles?.display || data.title || normalizedKey),
      extract: sanitizeString(data.extract || ''),
      thumbnailUrl: data.thumbnail?.source ? encodeURI(data.thumbnail.source) : undefined,
      originalImageUrl: data.originalimage?.source ? encodeURI(data.originalimage.source) : undefined,
      pageUrl: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(normalizedKey)}`,
      coordinates: data.coordinates
    };

    cache.set(normalizedKey, result);
    return result;
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}
