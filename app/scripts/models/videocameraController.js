App.VideocameraController = App.UiControl.extend({
  videoView: DS.belongsTo('videoView'),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('videocameraController');
    this.decorateXml(elem);

    var videoView = this.get('videoView');

    if (videoView != null) {
      elem.appendChild(videoView.toXml(xmlDoc));
    }
    
    return elem;
  }
});