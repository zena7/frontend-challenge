import 'dotenv/config';

export const get = (url, options) => {
  return fetch(`${process.env.ROOT_URL}${url}`, {
    headers: {
      method: 'GET',
      'x-api-key': process.env.API_KEY,
      ...options,
    },
  });
};

export const post = (url, options) => {
  fetch(`${process.env.ROOT_URL}${url}`, {
    headers: {
      method: 'POST',
      'x-api-key': process.env.API_KEY,
      ...options,
      data: options.data,
    },
  });
};
