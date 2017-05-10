/**
 * Stop.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    type: {
      model: 'type',
      required: true
    },
    status: {
      type: 'string',
      num: ['disable', 'enable', 'canceled'],
      required: true
    },

    // Change returned object.
    toJSON: function () {
      var obj = this.toObject();
      obj['type_obj'] = obj.type ? obj.type : null;
      obj['type'] = obj.type ? obj.type.id : '';
      return obj;
    }
  }
};
