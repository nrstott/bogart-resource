function HttpError(status, message) {
  var httpError = Object.create(HttpError.prototype, {
    constructor: { value: HttpError },
    status: { value: 404 },
    message: { value: message },
    name: { value: 'HttpError' }
  });

  Error.captureStackTrace(httpError, HttpError);

  return httpError;
}

HttpError.prototype = Object.create(Error.prototype);

module.exports = HttpError;
