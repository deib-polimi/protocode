App.VideoView = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: null}),

  width:    DS.attr('number', {defaultValue: 300}),
  height:   DS.attr('number', {defaultValue: 200}),

  xmlName:  'videoView',

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
          if (uiControl.get('videoView') == self) {
            uiControl.set('videoView', null);
            uiControl.save();
          }
        });
      });
    }

    this._super();
  },

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement(this.get('xmlName'));
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
App.VideoView.FIXTURES = [
  {
    id: 7,
    sourceType: 1,
    name: 'VideoView1',
    posX: 100,
    posY: 400,
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 8,
    paddingEnd: 8,
    marginTop: 0,
    marginBottom: 0,
    marginStart: 0,
    marginEnd: 0,
    alignParentTop: false,
    alignParentBottom: false,
    alignParentStart: false,
    alignParentEnd: false,
    width: 200,
    height: 100,
    viewController: 1,
    parentContainer: null
  }
];*/