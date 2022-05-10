const pageViewGoogleAnalyticsEvent = (page) => {
    if (process.env.NODE_ENV == 'production') {
        window.gtag('event', 'custom_page_view', page);
    }
}

export default pageViewGoogleAnalyticsEvent