App.ImageView = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: 'parentControl'}),

  width:    DS.attr('number', {defaultValue: 300}),
  height:   DS.attr('number', {defaultValue: 200}),

  didCreate: function() {
    this._super();
    
    var sourceType = this.store.createRecord('sourceType');
    this.set('sourceType', sourceType);
    this.save();
  }
});

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
];