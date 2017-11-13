process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
   
    if (input !== null) {
        var instruction = input.toString().trim();
        
        switch (instruction) {
          case 'getOSinfo':
            getOSinfo();
            break;
            case 'exit':
            console.log(' \n');
                process.stdout.write('Quitting app!\n\n');
                process.exit();
            break;
            default:
              process.stderr.write('Wrong instruction!\n\n');
              break;
        }
    }
});

var OSinfo = require('./modules/OSInfo');
OSinfo.print();