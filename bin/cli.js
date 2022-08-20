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

const repoName = process.argv[2] ?? 'nuxt-template';
const gitCheckoutCommand = `git clone --depth 1 https://github.com/mihail727/nuxt-template.git ${repoName}`;
const afterInstallClearCommand = `cd ${repoName} && rm -rf .git yarn.lock bin README.md LICENSE .gitignore`;

console.log(`\nCloning the repository with name ${repoName}...`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log('\nClearing files...');

const cleared = runCommand(afterInstallClearCommand);
if (!cleared) process.exit(-1);

console.log('\nProject ready. Follow the following commands to start');
console.log(`cd ${repoName} && npm install && npm run dev`);
