import client from './client';

const endpoint = '/rentedtools';

const getRentedTools = () => {
  return client.get(endpoint);
};

const addRentedTool = (rentedTool, onUploadProgress) => {
  return client.post(endpoint, rentedTool, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  addRentedTool,
  getRentedTools,
};
