App.AudioPlayer = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: null}),

  width:              DS.attr('number', {defaultValue: 200}),
  height:             DS.attr('number', {defaultValue: 44}),

  xmlName:  'audioPlayer',

  didCreate: function() {
    this._super();
    
    var sourceType = this.store.createRecord('sourceType');
    this.set('sourceType', sourceType);
    sourceType.save();
    this.save();
  },

  deleteRecord: function() {
    var sourceType = this.get('sourceType');

    if (sourceType) {
      sourceType.deleteRecord();
      sourceType.save();
    }

    var viewController = this.get('viewController');
    var self = this;

    if (viewController) {
      viewController.get('uiControls').then(function(uiControls) {
        uiControls.forEach(function (uiControl) {
          if (uiControl.get('audioPlayer') == self) {
            uiControl.set('audioPlayer', null);
            uiControl.save();
          }
        });
      });
    }

    this._super();
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

  // Override because there's only one AudioPlayer
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