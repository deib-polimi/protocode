App.WithSourceType = Ember.Mixin.create({
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