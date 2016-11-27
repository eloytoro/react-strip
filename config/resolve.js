const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = (relativePath) => {
  return path.resolve(appDirectory, relativePath);
}
