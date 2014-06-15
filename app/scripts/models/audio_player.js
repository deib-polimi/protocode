App.AudioPlayer = App.UiControl.extend({
  sourceType: DS.belongsTo('sourceType', {inverse: 'parentControl'}),

  didCreate: function() {
    this._super();
    
    var sourceType = this.store.createRecord('sourceType');
    this.set('sourceType', sourceType);
    this.save();
  }
});
/*
App.AudioPlayer.FIXTURES = [];
*/