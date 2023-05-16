import client from './client';

const endpoint = '/returns';

const addReturn = (newReturn, onUploadProgress) => {
  return client.post(endpoint, newReturn, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  addReturn,
};
