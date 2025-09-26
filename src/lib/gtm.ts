// Define more specific types for GTM events
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

// Enhanced global declaration with better typing
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

// More specific event data interface
interface GTMEventData {
  event: string;
  page?: string;
  [key: string]: unknown;
}

// Enhanced pageview function with better error handling
export const pageview = (url: string): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: url,
    } as GTMEventData);
  }
};

// More robust gtmEvent function with better typing
export const gtmEvent = (
  event: string,
  data: Record<string, unknown> = {}
): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...data,
    } as GTMEventData);
  }
};

// Additional utility functions for better GTM integration
export const initializeGTM = (): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
  }
};
