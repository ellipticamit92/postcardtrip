export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
