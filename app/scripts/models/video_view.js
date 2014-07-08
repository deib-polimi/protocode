App.VideoView = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: 'parentControl'}),

  width:    DS.attr('number', {defaultValue: 300}),
  height:   DS.attr('number', {defaultValue: 200}),

  didCreate: function() {
    this._super();
    
    var sourceType = this.store.createRecord('sourceType');
    this.set('sourceType', sourceType);
    this.save();
  },

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('videoViews');
    this.decorateXml(elem);

    var sourceType = this.get('sourceType');

    if (sourceType != null) {
      elem.appendChild(sourceType.toXml(xmlDoc));
    }
    
    return elem;
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