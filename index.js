const Sentry = require('@sentry/browser');



/*function sum(a, b) {
    return a + b;
}*/

function testCaptureException(callback){
    Sentry.init({
        dsn: 'https://825d3877df6c46138114d45066925eb5@sentry.io/1489337',
        beforeSend(event, hint) {
            callback(event);
            //return event;
          }
    });

    Sentry.captureException(new Error("new error"));
}


module.exports = {
    //sum: sum,
    testCaptureException: testCaptureException
}