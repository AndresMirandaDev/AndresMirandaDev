import client from './client';

const endpoint = '/tools';

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

export default {
  getTools,
  getToolById,
  updateStatus,
};
