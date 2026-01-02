const SPACE_KEYWORDS = [
  "space",
  "planet",
  "star",
  "galaxy",
  "astronomy",
  "cosmic",
  "orbit",
  "asteroid",
  "nebula",
  "black hole",
  "universe",
  "moon",
  "solar",
];

export async function fetchSpaceText(maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    const res = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/random/summary"
    );

    if (!res.ok) continue;

    const data = await res.json();
    if (!data?.extract) continue;

    const text = `${data.title} ${data.extract}`.toLowerCase();

    if (SPACE_KEYWORDS.some(k => text.includes(k))) {
      return data.extract;
    }
  }

  throw new Error("No space-related article found");
}
