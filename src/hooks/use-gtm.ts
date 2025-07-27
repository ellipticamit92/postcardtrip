import { useCallback } from 'react'

interface GTMEvent {
  event: string
  [key: string]: any
}

export function useGTM() {
  const pushEvent = useCallback((event: GTMEvent) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push(event)
    }
  }, [])

  const trackPageView = useCallback((url: string) => {
    pushEvent({
      event: 'pageview',
      page: url,
    })
  }, [pushEvent])

  const trackCustomEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    pushEvent({
      event: eventName,
      ...parameters,
    })
  }, [pushEvent])

  return {
    pushEvent,
    trackPageView,
    trackCustomEvent,
  }
} 