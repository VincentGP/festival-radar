let baseUrl = '';

if (process.env.NODE_ENV === 'production') {
  baseUrl = '';
} else {
  baseUrl = 'http://localhost:7777';
}

export const apiBaseUrl = baseUrl;
