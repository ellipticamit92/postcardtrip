const CMS_BASE_URL =
  process.env.POSTCARD_CMS_URL ?? "http://localhost:3000/api/website";
const API_KEY = process.env.POSTCARD_CMS_PUBLIC_API_KEY ?? "";

// Generic fetch function for CMS API calls
async function fetchFromCMS(endpoint: string) {
  const response = await fetch(`${CMS_BASE_URL}${endpoint}`, {
    headers: { "x-api-key": API_KEY },
    cache: "no-store", // or ISR: next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`CMS fetch failed: ${response.status}`);
  }

  return response.json();
}

// Fetch popular packages
export async function getPopularPackages() {
  return fetchFromCMS("/packages/popular");
}

// Fetch package details by name
export async function getPackageDetails(name: string) {
  return fetchFromCMS(`/packages/${encodeURIComponent(name)}`);
}
