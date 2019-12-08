import request from './request';

const get = (path, options = {}) => {
  return request(path, { ...options, method: 'GET' });
};

const post = (path, body, options = {}) => {
  return request(path, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

const put = (path, body, options = {}) => {
  return request(path, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

const del = (path, options = {}) => {
  return request(path, { ...options, method: 'DELETE' });
};

export default {
  get,
  post,
  put,
  del,
};
