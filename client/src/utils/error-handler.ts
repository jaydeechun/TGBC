// Global error handler to catch and suppress development-only errors
export function setupGlobalErrorHandler() {
  if (typeof window !== 'undefined') {
    // Suppress specific development errors
    window.addEventListener('error', (event) => {
      const error = event.error;
      if (error && error.message) {
        // Suppress Replit runtime error plugin issues
        if (error.message.includes('209a1f16-459a-48e5-b5e2-2b5d16aaf629') ||
            error.message.includes('replit.dev')) {
          event.preventDefault();
          console.warn('Suppressed Replit development error:', error.message);
          return;
        }
      }
    });

    // Also handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && event.reason.message) {
        if (event.reason.message.includes('209a1f16-459a-48e5-b5e2-2b5d16aaf629') ||
            event.reason.message.includes('replit.dev')) {
          event.preventDefault();
          console.warn('Suppressed Replit development promise rejection:', event.reason.message);
          return;
        }
      }
    });
  }
}
