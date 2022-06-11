const os = require('os')

const information = {}

//information
information.user = os.userInfo();
information.uptime = os.uptime();
information.currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

module.exports = information;