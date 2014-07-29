App.AudioRecorder = App.UiControl.extend({
  audioPlayer: DS.belongsTo('audioPlayer', {inverse: null}),

  xmlName:   'audioRecorder',

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(elem);

    var audioPlayer = this.get('audioPlayer');

    if (audioPlayer != null) {
      elem.setAttribute('audioPlayerId', audioPlayer.get('name'));
    }
    
    return elem;
  },

  // Override because there's only one AudioRecorder
  getRefPath: function(path) {
    var updatedPath = '/@' + this.get('xmlName');

    if (this.get('parentContainer') != null) {
      updatedPath = this.get('parentContainer').getRefPath(updatedPath);
    }
    else {
      updatedPath = this.get('viewController').getRefPath(updatedPath);
    }

    return updatedPath;
  }
});