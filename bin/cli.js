#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: 'inherit' });
	} catch (e) {
		console.error(`Failed to execute ${command}`, e);
		return false;
	}
	return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/mihail727/nuxt-template.git ${repoName}`;
const afterInstallClearCommand = 'rm -rf .git';

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

const cleared = runCommand(afterInstallClearCommand);
if (!cleared) process.exit(-1);

console.log('Project ready. Follow the following commands to start');
console.log(`cd ${repoName} && npm install && npm run dev`);
