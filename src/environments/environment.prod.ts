// Production environment: avoid hard-coding secrets. Inject runtime values instead.
const runtimeOrigin = typeof window !== 'undefined' && window.location && window.location.origin
  ? window.location.origin
  : '';

export const environment = {
  production: true,
  baseUrl: (window as any)?.__env?.API_BASE_URL || (() => {
    const host = window?.location?.hostname || '';
    if (host === 'localhost' || host === '127.0.0.1' || host === '::1' || window?.location?.protocol === 'file:') {
      return 'http://localhost:4002/api/auth';
    }
    return runtimeOrigin ? `${runtimeOrigin}/api/auth` : 'http://localhost:4002/api/auth';
  })(),
  contentBaseUrl: (window as any)?.__env?.CONTENT_API_URL || (() => {
    const host = window?.location?.hostname || '';
    if (host === 'localhost' || host === '127.0.0.1' || host === '::1' || window?.location?.protocol === 'file:') {
      return 'http://localhost:4001/api/content';
    }
    return runtimeOrigin ? `${runtimeOrigin}/api/content` : 'http://localhost:4001/api/content';
  })(),
  mediaBaseUrl: (window as any)?.__env?.MEDIA_BASE_URL || 'http://localhost:4001/',
  referralShareBaseUrl: (window as any)?.__env?.REFERRAL_SHARE_URL || 'https://gowildkarunadu.com',
  encryptionKey: (window as any)?.__env?.ENCRYPTION_KEY || 'JagguBoss_Secret_2025!',
  encryptionSalt: (window as any)?.__env?.ENCRYPTION_SALT || 'start-here-salt',
};
