App.WithSourceType = Ember.Mixin.create({
  sourceTypeOptions: [
    {label: 'hardwareFile', value: 'hardwareFile'}, 
    {label: 'localFile', value: 'localFile'},
    {label: 'remoteFile', value: 'remoteFile'}
    ],

  sourceTypeSelected: function(key, value) {
    // setter
    var sourceType = this.get('model.sourceType');

    if (sourceType) {
      if (arguments.length > 1) {
        this.set('model.sourceType.type', value);
        this.get('model.sourceType').save();
      }

      // getter
      return this.get('model.sourceType.type');
    }
    else {
      return null;
    }

  }.property('model.sourceType.type'),

  actions: {
    acceptChanges: function() {
      this._super();
      this.get('model.sourceType').save();
    }
  }
});