import client from './client';

const endpoint = '/projects';

const getProjects = () => {
  return client.get(endpoint);
};

export default {
  getProjects,
};
