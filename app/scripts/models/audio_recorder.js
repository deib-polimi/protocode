App.AudioRecorder = App.UiControl.extend({
  audioPlayer: DS.belongsTo('audioPlayer'),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('audioRecorder');
    this.decorateXml(elem);

    var audioPlayer = this.get('audioPlayer');

    if (audioPlayer != null) {
      elem.appendChild(audioPlayer.toXml(xmlDoc));
    }
    
    return elem;
  }
});