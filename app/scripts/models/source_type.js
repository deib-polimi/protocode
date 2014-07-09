App.SourceType = DS.Model.extend({
  hardwareFile: DS.attr('string'),
  localFile: DS.attr('string'),
  remoteFile: DS.attr('string'),
  //parentControl: DS.belongsTo('uiControl', {inverse: 'sourceType', polymorphic: true}),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('sourceType');
    
    elem.setAttribute('hardwareFile', this.get('hardwareFile'));
    elem.setAttribute('localFile', this.get('localFile'));
    elem.setAttribute('remoteFile', this.get('remoteFile'));
    
    return elem;
  }
});


/*
App.SourceType.FIXTURES = [
  {
    id: 1, 
    hardwareFile: 'hardwareFile1',
    localFile: 'localFile1',
    remoteFile: 'remoteFile1',
    parentControl: {id: 6, type: 'imageView'}
  }
];*/