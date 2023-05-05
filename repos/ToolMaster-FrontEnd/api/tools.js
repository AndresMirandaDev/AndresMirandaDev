import client from './client';

const endpoint = '/tools';

const addTool = (tool, onUploadProgress) => {
  return client.post(endpoint, tool, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const getTools = () => {
  return client.get(endpoint);
};

const getToolById = (tool) => {
  return client.get(endpoint + '/' + tool._id);
};

const updateStatus = (tool) => {
  const updatedTool = {
    name: tool.name,
    serieNumber: tool.serieNumber,
    toolGroup: tool.toolGroup._id,
    project: tool.project._id,
  };

  updatedTool.available = true;

  return client.put(endpoint + '/' + tool._id, updatedTool);
};

const deleteTool = (tool) => {
  return client.delete(endpoint + '/' + tool._id);
};

export default {
  addTool,
  getTools,
  getToolById,
  updateStatus,
  deleteTool,
};
