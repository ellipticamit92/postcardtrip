import { fetchFromCMS } from "../fetchCMS";

// Fetch popular packages
export async function getPopularPackages() {
  return fetchFromCMS("/packages/popular");
}

// Fetch package details by name
export async function getPackageDetails(slug: string) {
  return fetchFromCMS(`/packages/${slug}`);
}

export async function getAllPackages(page: number, limit: number) {
  return fetchFromCMS(`/packages?page=${page}&limit=${limit}`);
}

export async function getPackageReview(pid: number) {
  return fetchFromCMS(`/reviews/package/${pid}`);
}

export async function getSimilarPackage(did: number, pid: number) {
  return fetchFromCMS(`/packages/destination/${did}_${pid}`);
}
