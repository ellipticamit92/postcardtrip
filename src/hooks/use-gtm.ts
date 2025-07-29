import { useCallback } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

interface GTMEvent {
  event: string;
  [key: string]: unknown;
}

export function useGTM() {
  const pushEvent = useCallback((event: GTMEvent) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(event);
    }
  }, []);

  const trackPageView = useCallback(
    (url: string) => {
      pushEvent({
        event: "pageview",
        page: url,
      });
    },
    [pushEvent]
  );

  const trackCustomEvent = useCallback(
    (eventName: string, parameters: Record<string, unknown> = {}) => {
      pushEvent({
        event: eventName,
        ...parameters,
      });
    },
    [pushEvent]
  );

  return {
    pushEvent,
    trackPageView,
    trackCustomEvent,
  };
}
