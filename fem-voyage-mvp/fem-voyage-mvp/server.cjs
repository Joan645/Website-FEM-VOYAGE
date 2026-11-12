const { spawn } = require('node:child_process');

const port = process.env.PORT || '3000';
const isWindows = process.platform === 'win32';
const serveCommand = isWindows ? 'node_modules/.bin/serve.cmd' : 'node_modules/.bin/serve';

const server = spawn(
  serveCommand,
  ['-s', '.', '-l', `tcp://0.0.0.0:${port}`],
  { stdio: 'inherit', shell: isWindows }
);

server.on('error', (error) => {
  console.error('Gagal menjalankan server static:', error.message);
  process.exit(1);
});

server.on('exit', (code) => process.exit(code ?? 0));
