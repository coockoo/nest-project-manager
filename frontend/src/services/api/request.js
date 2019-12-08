import baseRequest from './base-request';

import auth from '../auth';

export default function request(path, options /*, dataType = 'json'*/) {
  return baseRequest(path, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${auth.getAccessToken()}`,
    },
  });
}
