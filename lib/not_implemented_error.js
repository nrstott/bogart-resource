function NotImplementedError(method) {
  Error.call(this, method+' should be implemented by an inheriting Resource');
};

NotImplementedError.prototype = Object.create(Error.prototype);

module.exports = NotImplementedError;
