App.ImageView = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: null}),

  width:    DS.attr('number', {defaultValue: 300}),
  height:   DS.attr('number', {defaultValue: 200}),

  xmlName:        'imageViews',

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
          if (uiControl.get('imageView') == self) {
            uiControl.set('imageView', null);
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
  }
});
/*
App.ImageView.FIXTURES = [
  {
    id: 6,
    sourceType: 1,
    name: 'ImageView1',
    posX: 200,
    posY: 300,
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
    width: 100,
    height: 100,
    viewController: 1,
    parentContainer: null
  }
];*/