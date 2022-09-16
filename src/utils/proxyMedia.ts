import { ns } from '$utils/style';
import { getServerConfig } from '$shared/constants';

const createHmac = require('create-hmac');

const urlSafeBase64 = (string) => {
  // eslint-disable-next-line no-undef
  return Buffer.from(string)
    .toString('base64')
    .replace(/[=]/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

// eslint-disable-next-line no-undef
const hexDecode = (hex) => Buffer.from(hex, 'hex');

const sign = (salt, target, secret) => {
  const hmac = createHmac('sha256', hexDecode(secret));
  hmac.update(hexDecode(salt));
  hmac.update(target);
  return urlSafeBase64(hmac.digest());
};

const RESIZING_TYPE = 'fill';
const GRAVITY = 'no';
const enlarge = 1;
const EXTENTION = 'png';

/*
    Returns url for cached image
    Please provide width and height without additional normalizing
 */
export function proxyMedia(url: string, width: number = 300, height: number = 300) {
  const KEY = getServerConfig('cachedMediaKey');
  const SALT = getServerConfig('cachedMediaSalt');

  const encoded_url = urlSafeBase64(url);
  const path = `/rs:${RESIZING_TYPE}:${Math.round(ns(width))}:${Math.round(
    ns(height),
  )}:${enlarge}/g:${GRAVITY}/${encoded_url}.${EXTENTION}`;
  const signature = sign(SALT, path, KEY);
  return `${getServerConfig('cachedMediaEndpoint')}/${signature}${path}`;
}
