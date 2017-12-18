#!/usr/bin/env node
const chalk = require('chalk');
const nodePlop = require('node-plop');
const plop = nodePlop(`${__dirname}/plopfile.js`);

const logChange = (line) => {
  console.log(chalk.green('[SUCCESS]'), line.type, line.path);
};

const logFailure = (line) => {
  const logs = [chalk.red('[FAILED]')];
  if (line.type) { logs.push(line.type); }
  if (line.path) { logs.push(line.path); }

  const error = line.error || line.message;
  logs.push(chalk.red(error));

  console.log(...logs);
};

const runGenerator = async () => {
  const args = process.argv.slice(2);
  const generatorName = args[0];
  const generator = plop.getGenerator(generatorName);
  try {
    const opts = await generator.runPrompts(args.slice(1))
    const result = await generator.runActions(opts);
    result.changes.forEach(logChange);
    result.failures.forEach(logFailure);
  } catch (err) {
    console.error(chalk.red('[ERROR]'), err.message);
    throw err;
  }
};


runGenerator().then(() => {
  process.exit(0);
}).catch(() => {
  process.exit(1);
});
