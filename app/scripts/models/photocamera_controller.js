App.PhotocameraController = App.UiControl.extend({
  imageView: DS.belongsTo('imageView', {inverse: null}),

  xmlName:   'photocameraController',

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(elem);

    var imageView = this.get('imageView');

    if (imageView != null) {
      elem.setAttribute('imageViewId', imageView.get('name'));
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