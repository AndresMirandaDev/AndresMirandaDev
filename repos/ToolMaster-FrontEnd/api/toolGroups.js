import client from './client';

const endpoint = '/toolgroups';

const getToolGroups = () => {
  return client.get(endpoint);
};

const updateGroup = (group, onUploadProgress) => {
  const updatedGroup = {
    name: group.name,
    description: group.description,
  };

  return client.put(endpoint + '/' + group.id, updatedGroup, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};
export default {
  getToolGroups,
  updateGroup,
};
