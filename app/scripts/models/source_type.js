App.SourceType = DS.Model.extend({
  hardwareFile: DS.attr('string'),
  localFile: DS.attr('string'),
  remoteFile: DS.attr('string'),
  parentControl: DS.belongsTo('uiControl', {inverse: 'sourceType', polymorphic: true}),

  // Used to reload menuItems
  didCreate: function() {
    var self = this;
    this.get('parentControl.sourceType').then(function (uiControl) {
      uiControl.pushObject(self);
    });
  }
});



App.SourceType.FIXTURES = [
  {
    id: 1, 
    hardwareFile: 'hardwareFile1',
    localFile: 'localFile1',
    remoteFile: 'remoteFile1',
    parentControl: {id: 6, type: 'imageView'}
  }
];