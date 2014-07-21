App.PhotocameraController = App.UiControl.extend({
  imageView: DS.belongsTo('imageView', {inverse: null}),

  xmlName:   'photocameraController',

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(elem);

    var imageView = this.get('imageView');

    if (imageView != null) {
      elem.appendChild(imageView.toXml(xmlDoc));
    }
    
    return elem;
  }
});