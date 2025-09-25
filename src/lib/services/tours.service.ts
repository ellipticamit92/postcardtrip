import { fetchFromCMS } from "../fetchCMS";

export const getHomeTours = async () => {
  return fetchFromCMS("/tours");
};
