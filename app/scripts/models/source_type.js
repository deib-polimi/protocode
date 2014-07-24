App.SourceType = DS.Model.extend({
  hardwareFile: DS.attr('string'),
  localFile: DS.attr('string'),
  remoteFile: DS.attr('string'),

  type: DS.attr('string'),
  fileUri: DS.attr('string'),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('sourceType');
    
    elem.setAttribute('sourceType', this.get('type'));
    elem.setAttribute('fileUri', this.get('fileUri'));
    
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