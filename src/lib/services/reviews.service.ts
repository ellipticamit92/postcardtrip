import { fetchFromCMS } from "../fetchCMS";

export async function getRecentReviews() {
  return fetchFromCMS("/reviews/recent");
}

export async function getAllReviews(page: number = 1) {
  return fetchFromCMS(`/reviews?page=${page}`);
}
