const CMS_BASE_URL =
  process.env.POSTCARD_CMS_URL || "http://localhost:3000/api/website";
const API_KEY = process.env.POSTCARD_CMS_PUBLIC_API_KEY || "";

export const getAllItinaries = async () => {
  const res = await fetch(`${CMS_BASE_URL}/itinaries`, {
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

export const getItinaryById = async (id: string) => {
  const res = await fetch(`${CMS_BASE_URL}/itinaries/${id}`, {
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

export const getPopularItinaries = async () => {
  const res = await fetch(`${CMS_BASE_URL}/itinaries/popular`, {
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
