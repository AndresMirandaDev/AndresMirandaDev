import client from './client';

const endpoint = '/tools';

const getTools = () => {
  return client.get(endpoint);
};

export default {
  getTools,
};
