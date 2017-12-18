const project = require('./generators/project');

module.exports = (plop) => {
  plop.setGenerator('project', project);
};
