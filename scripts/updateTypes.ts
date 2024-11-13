import { spawn, SpawnOptions } from 'child_process';

const opts: SpawnOptions = {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true,
};

const updateSchema = spawn('npx', ['sanity', 'schema', 'extract'], opts);

updateSchema.on('close', (code: number) => {
  if (code !== 0) {
    console.log(`First command exited with code ${code}`);
    return;
  }

  spawn('npx', ['sanity', 'typegen', 'generate'], opts);
});
