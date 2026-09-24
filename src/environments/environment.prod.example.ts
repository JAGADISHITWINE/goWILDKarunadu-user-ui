// Production environment template for the user UI.
// Copy this file to environment.prod.ts and replace the values with your live deployment values.

export const environment = {
  production: true,
  baseUrl: 'https://user-api.example.com/api/auth',
  contentBaseUrl: 'https://user-api.example.com/api/content',
  mediaBaseUrl: 'https://images.example.com/',
  referralShareBaseUrl: 'https://example.com',
  encryptionKey: 'replace_with_runtime_secret_or_secure_runtime_value',
  encryptionSalt: 'replace_with_runtime_salt'
};

// Recommended deployment practice:
// - Do not store production secrets in the repo.
// - Inject runtime values via window.__env before the app loads when possible.
// - Keep this file minimal and use secure runtime config for sensitive values.
