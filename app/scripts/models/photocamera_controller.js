App.PhotocameraController = App.UiControl.extend({
  imageView: DS.belongsTo('imageView'),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('photocameraController');
    this.decorateXml(elem);

    var imageView = this.get('imageView');

    if (imageView != null) {
      elem.appendChild(imageView.toXml(xmlDoc));
    }
    
    return elem;
  }
});