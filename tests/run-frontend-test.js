const { execSync } = require('child_process');

try {
  execSync('node tests/frontend.test.js', { stdio: 'inherit' });
  console.log('Frontend tests passed');
} catch (error) {
  console.error('Frontend tests failed');
  process.exit(1);
}

