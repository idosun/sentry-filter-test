const entryPoint = require('./index');

/*test('adds 1 + 2 to equal 3', () => {
  expect(entryPoint.sum(1, 2)).toBe(3);
});
*/


test('Test Sentry.captureException', done => {
  function callback(event) {
    
    expect(event.exception.values[0].value).toBe('new error');
    done();
  }

  entryPoint.testCaptureException(callback);
});