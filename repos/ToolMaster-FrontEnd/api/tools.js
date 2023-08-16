import client from './client';

const endpoint = '/tools';

const addTool = (tool, onUploadProgress) => {
  return client.post(endpoint + '/create', tool, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const getTools = () => {
  return client.get(endpoint + '/all');
};

const getToolById = (tool) => {
  return client.get(endpoint + '/forid/' + tool._id);
};

const updateTool = (tool, onUploadProgress) => {
  const updatedTool = {
    name: tool.name,
    serieNumber: tool.serieNumber,
    toolGroup: tool.toolGroup,
  };

  return client.put(endpoint + '/update/' + tool._id, updatedTool, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const updateStatus = (tool) => {
  const updatedTool = {
    name: tool.name,
    serieNumber: tool.serieNumber,
    toolGroup: tool.toolGroup._id,
    project: tool.project ? tool.project._id : null,
  };

  updatedTool.available = true;
  updatedTool.reparation = false;

  return client.put(endpoint + '/update/' + tool._id, updatedTool);
};

const recoverTool = (tool) => {
  const updatedTool = {
    name: tool.name,
    serieNumber: tool.serieNumber,
    toolGroup: tool.toolGroup._id,
    project: null,
    available: true,
  };

  return client.put(endpoint + '/update/' + tool._id, updatedTool);
};
const deleteTool = (tool, onUploadProgress) => {
  return client.delete(endpoint + '/delite/' + tool._id, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const dispatchTool = (tool, onUploadProgress) => {
  const updatedTool = {
    name: tool.name,
    serieNumber: tool.serieNumber,
    toolGroup: tool.toolGroup._id,
    project: tool.project,
    available: false,
  };

  return client.put(endpoint + '/update/' + tool._id, updatedTool, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

const sendToReparation = (tool) => {
  const updatedTool = {
    name: tool.name,
    serieNumber: tool.serieNumber,
    toolGroup: tool.toolGroup._id,
    project: tool.project ? tool.project._id : null,
  };
  updatedTool.reparation = true;
  updatedTool.available = false;

  return client.put(endpoint + '/update/' + tool._id, updatedTool);
};

export default {
  addTool,
  getTools,
  getToolById,
  updateStatus,
  updateTool,
  deleteTool,
  dispatchTool,
  recoverTool,
  sendToReparation,
};
