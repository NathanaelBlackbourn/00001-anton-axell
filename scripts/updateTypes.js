const { spawn } = require('child_process');

const opts = {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true,
};

const updateSchema = spawn('npx', ['sanity', 'schema', 'extract'], opts);

updateSchema.on('close', (code) => {
  if (code !== 0) {
    console.log(`First command exited with code ${code}`);
    return;
  }

  spawn('npx', ['sanity', 'typegen', 'generate'], opts);
});
