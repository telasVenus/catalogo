function gtag(...args) {
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export function trackWhatsApp(origem) {
  gtag('event', 'clickWhatsApp', {
    event_category: 'contato',
    event_label: origem,
  })
}

export function trackCatalog(origem) {
  gtag('event', 'click_catalogo', {
    event_category: 'catalogo',
    event_label: origem,
  })
}
