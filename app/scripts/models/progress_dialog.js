App.ProgressDialog = App.Dialog.extend({
  spinner:        DS.attr('boolean', {defaultValue: false}),
  viewController: DS.belongsTo('viewController', {inverse: 'progressDialogs'}),

  xmlName:    'progressDialogs',

  toXml: function(xmlDoc) {
    var elem = this._super();

    elem.setAttribute('spinner', this.get('spinner'));
    
    return elem;
  },
});