export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'zachcoop.us.auth0.com'
export const audience = 'https://tuesday-demo.com'
export const clientId = 'BQmCTqjloyelxOlXAGvXhIh12wwnCKSI'
