App.AlertDialog = DS.Model.extend({
  name:       DS.attr('string', {defaultValue: 'alertDialogName'}),
  title:      DS.attr('string', {defaultValue: 'title'}),
  message:    DS.attr('string', {defaultValue: 'message'}),

  viewController: DS.belongsTo('viewController', {inverse: 'alertDialogs'}),

  xmlName:    'alertDialogs',
  

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));

    elem.setAttribute('id', this.get('name'));
    elem.setAttribute('title', this.get('title'));
    elem.setAttribute('message', this.get('message'));
    
    return elem;
  },

  didCreate: function() {
    this.set('name', this.get('id').replace(/[0-9]/g, '') + this.constructor.toString().split(".")[1]);
    this.save();
  }
});