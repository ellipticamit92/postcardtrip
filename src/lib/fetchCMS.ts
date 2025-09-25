/* eslint-disable @typescript-eslint/no-explicit-any */

const CMS_BASE_URL =
  process.env.POSTCARD_CMS_URL ?? "http://localhost:3000/api/website";
const API_KEY = process.env.POSTCARD_CMS_PUBLIC_API_KEY ?? "";

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
};

// Generic fetch function for CMS API calls
export async function fetchFromCMS(
  endpoint: string,
  options: FetchOptions = {}
) {
  const { method = "GET", body, headers = {} } = options;

  const response = await fetch(`${CMS_BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store", // for GET requests
  });

  if (!response.ok) {
    throw new Error(
      `CMS fetch failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
