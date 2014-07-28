App.AudioPlayer = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: null}),

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
      var sourceTypeAttrs = sourceType.toXml(xmlDoc).attributes;

      for (var i = 0; i < sourceTypeAttrs.length; i++) {
        var attr = sourceTypeAttrs[i];
        elem.setAttribute(attr.name, attr.value);
      };
    }
    
    return elem;
  },

  // Override because there's only one videoView
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
/*
App.AudioPlayer.FIXTURES = [];
*/