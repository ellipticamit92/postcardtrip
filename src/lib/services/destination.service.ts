const CMS_BASE_URL =
  process.env.POSTCARD_CMS_URL || "http://localhost:3000/api/website";
const API_KEY = process.env.POSTCARD_CMS_PUBLIC_API_KEY || "";

export const getTrendingDestination = async () => {
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
};

export const getDestinationByName = async (name: string) => {
  const res = await fetch(`${CMS_BASE_URL}/destinations/${name}`, {
    headers: {
      "x-api-key": API_KEY,
    },
    cache: "no-store", // or ISR: next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw new Error(`CMS fetch failed: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

export const getAll = async () => {
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
};

export const getPackagesByDestination = async (params: { name: string }) => {
  const { name } = params;
  const res = await fetch(`${CMS_BASE_URL}/destinations/packages?name=${encodeURIComponent(name)}`, {
    headers: {
      "x-api-key": API_KEY,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`CMS fetch failed: ${res.status}`);
  }
  return res.json();
};
