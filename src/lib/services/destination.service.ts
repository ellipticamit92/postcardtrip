const CMS_BASE_URL =
  process.env.POSTCARD_CMS_URL || "http://localhost:3000/api/website";
const API_KEY = process.env.POSTCARD_CMS_PUBLIC_API_KEY || "";

export async function getTrendingDestination() {
  const res = await fetch(`${CMS_BASE_URL}/destinations/trending`, {
    headers: {
      "x-api-key": API_KEY,
    },
    cache: "no-store", // or ISR: next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`CMS fetch failed: ${res.status}`);
  }

  return res.json();
}

export async function getAll() {
  const res = await fetch(`${CMS_BASE_URL}/destinations`, {
    headers: {
      "x-api-key": API_KEY,
    },
    cache: "no-store", // or ISR: next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`CMS fetch failed: ${res.status}`);
  }

  return res.json();
}
