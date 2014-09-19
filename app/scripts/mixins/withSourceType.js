App.WithSourceType = Ember.Mixin.create({
  sourceTypeOptions: [
    {label: 'hardwareFile', value: 'hardwareFile'}, 
    {label: 'localFile', value: 'localFile'},
    {label: 'remoteFile', value: 'remoteFile'}
    ],

  sourceTypeSelected: function(key, value) {
    // setter
    if (arguments.length > 1) {
      this.set('model.sourceType.type', value);
      this.get('model.sourceType').save();
    }

    // getter
    return this.get('model.sourceType.type');

  }.property('model.sourceType.type'),

  actions: {
    acceptChanges: function() {
      this._super();
      this.get('model.sourceType').save();
    },

    delete: function() {
      this.get('model.sourceType').destroyRecord();
      this._super();
    }
  }
});