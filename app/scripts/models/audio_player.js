App.AudioPlayer = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: 'parentControl'}),

  didCreate: function() {
    this._super();
    
    var sourceType = this.store.createRecord('sourceType');
    this.set('sourceType', sourceType);
    this.save();
  },

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('audioPlayer');
    this.decorateXml(elem);

    var sourceType = this.get('sourceType');

    if (sourceType != null) {
      elem.appendChild(sourceType.toXml(xmlDoc));
    }
    
    return elem;
  }
});
/*
App.AudioPlayer.FIXTURES = [];
*/