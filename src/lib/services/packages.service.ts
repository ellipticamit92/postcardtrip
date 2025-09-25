import { fetchFromCMS } from "../fetchCMS";

// Fetch popular packages
export async function getPopularPackages() {
  return fetchFromCMS("/packages/popular");
}

// Fetch package details by name
export async function getPackageDetails(name: string) {
  return fetchFromCMS(`/packages/${encodeURIComponent(name)}`);
}

export async function getAllPackages(page: number, limit: number) {
  return fetchFromCMS(`/packages?page=${page}&limit=${limit}`);
}
