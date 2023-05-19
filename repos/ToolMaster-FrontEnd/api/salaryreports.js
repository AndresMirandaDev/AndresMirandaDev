import client from './client';

const endpoint = '/salaryreports';

const getReports = () => {
  return client.get(endpoint);
};

export default {
  getReports,
};
