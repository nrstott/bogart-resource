function NotImplementedError(method) {
  var notImplementedError = Object.create(NotImplementedError.prototype, {
    constructor: { value: NotImplementedError },
    message: {
      value: method+' should be implemented by an inheriting resource'
    },
    method: { value: method },
    name: { value: 'NotImplementedError' }
  });

  Error.captureStackTrace(notImplementedError, NotImplementedError);

  return notImplementedError;
};

NotImplementedError.prototype = Object.create(Error.prototype);

module.exports = NotImplementedError;
