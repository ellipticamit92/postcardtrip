import { fetchFromCMS } from "../fetchCMS";

export const getTrendingDestination = async () => {
  return fetchFromCMS("/destinations/trending");
};

export const getDestinationByName = async (name: string) => {
  return fetchFromCMS(`/destinations/${encodeURIComponent(name)}`);
};

export const getAll = async () => {
  return fetchFromCMS("/destinations");
};

export const getPackagesByDestination = async (params: { name: string }) => {
  const { name } = params;
  return fetchFromCMS(
    `/destinations/packages?name=${encodeURIComponent(name)}`
  );
};

export const getDestinationsOptions = async () => {
  return fetchFromCMS("/destinations/select-options");
};
