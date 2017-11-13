var os = require('os');

function Time() {

    var uptime = os.uptime();
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));

    console.log('Uptime (seconds):', uptime.toFixed(0), 'sec\n');
    console.log('Minutes and seconds: ~', minutes, 'min', seconds, 'sec\n');
    console.log('Hours, minutes and seconds: ~', hours, 'h', minutes, 'min', seconds, 'sec\n');
}

exports.print = Time;