App.VideocameraController = App.UiControl.extend({
  videoView: DS.belongsTo('videoView', {inverse: null}),

  xmlName:   'videocameraController',

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(elem);

    var videoView = this.get('videoView');

    if (videoView != null) {
      elem.setAttribute('videoViewId', videoView.get('name'));
    }
    
    return elem;
  },

  // Override because there's only one PhotocameraController
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