const project = require('./src/generators/project');

module.exports = (plop) => {
  plop.setGenerator('project', project);
};
