var _ = require('underscore');

function Format(name, viewEngine) {
  return Object.create(Format.prototype, {
    name: {
      enumerable: false,
      value: name
    },
    viewEngine: {
      enumerable: false,
      value: viewEngine
    }
  });
}

Format.prototype = {
  'text/html': function (req, entity) {
    if (!this.viewEngine) {
      throw new Error('text/html support requires a viewEngine to be set');
    }

    var templateName = req.resourceRoute+'.html';
    var templatePath = this.name;

    if (templateName === templatePath) {
      templateName = 'list';
    }

    return this.viewEngine.respond(path.join(templatePath, templateName), {
      locals: entity
    });
  },

  'application/json': function (req, entity) {
    return bogart.json(entity);
  }
};

Object.defineProperty(Format.prototype, 'accepts', {
  get: function () {
    var obj = this;

    var accepts = [];

    while (obj !== null) {
      accepts = accepts.concat(Object.keys(obj));
      obj = Object.getPrototypeOf(obj);
    }

    return _.uniq(accepts);
  },

  enumerable: false
});

module.exports = Format;
