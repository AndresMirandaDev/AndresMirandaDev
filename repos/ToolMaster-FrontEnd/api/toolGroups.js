import client from './client';

const endpoint = '/toolgroups';

const getToolGroups = () => {
  return client.get(endpoint);
};

export default {
  getToolGroups,
};
