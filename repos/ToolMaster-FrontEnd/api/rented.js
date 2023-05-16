import client from './client';

const endpoint = '/rentedtools';

const getRentedTools = () => {
  return client.get(endpoint);
};

export default {
  getRentedTools,
};
