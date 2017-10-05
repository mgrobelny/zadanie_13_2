var os = require('os');

function getOSinfo() {

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));
    
    var userInfo = os.userInfo();
    console.log(' \n');
    console.log('Uptime (seconds): ~', uptime.toFixed(0), 'sec\n');
    console.log('Minutes and seconds: ~', minutes, 'min', seconds, 'sec\n');
    console.log('Hours, minutes and seconds: ~', hours, 'h', minutes, 'min', seconds, 'sec\n');
    console.log('Type "exit" to quit the aapp...\n');
}

exports.print = getOSinfo;