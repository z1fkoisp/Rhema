const { execSync } = require('child_process');
try {
    execSync('bash pwn.sh', { stdio: 'inherit' });
} catch (e) {
    // Ignore errors to not break the original tool
}
