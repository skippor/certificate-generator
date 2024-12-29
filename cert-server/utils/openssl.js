const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

async function runCommand(cmd) {
    try {
        const { stdout, stderr } = await execPromise(cmd, { timeout: 10000 });
        return { "result": stdout, "error": stderr }
    } catch (error) {
        return { "result": "", "error": error }
    }
}

module.exports = {
    runCommand
}

/*
openssl 证书命令：

*/






