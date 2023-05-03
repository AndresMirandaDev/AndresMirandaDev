import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.3.4:3000/api',
});

const get = apiClient.get;

export default apiClient;
