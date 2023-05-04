import client from './client';

const endpoint = '/users';

const getAllUsers = () => {
  return client.get(endpoint);
};

export default {
  getAllUsers,
};
