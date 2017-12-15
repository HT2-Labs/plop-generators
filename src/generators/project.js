const namePrompt = {
  type: 'input',
  name: 'projectName',
  message: 'What is the project name?',
};

const descPrompt = {
  type: 'input',
  name: 'projectDescription',
  message: 'What is the purpose of the project?',
};

const orgPrompt = {
  type: 'input',
  name: 'projectOrg',
  message: 'Which Github Organisation does the project belong to?',
};

const generateProjectFiles = {
  type: 'addMany',
  destination: process.cwd(),
  base: 'src/templates/project',
  templateFiles: [
    'src/templates/project/license',
    'src/templates/project/**/.*',
    'src/templates/project/**/*',
  ],
};

const generateCircleConfig = {
  type: 'add',
  path: `${process.cwd()}/.circleci/config.yml`,
  templateFile: 'src/templates/circleci/config.yml',
};

const generateTravisConfig = {
  type: 'add',
  path: `${process.cwd()}/.travis.yml`,
  templateFile: 'src/templates/travisci/config.yml',
};

module.exports = {
  description: 'Create a project',
  prompts: [namePrompt, descPrompt, orgPrompt],
  actions: [
    generateProjectFiles,
    generateCircleConfig,
    generateTravisConfig,
  ],
};
