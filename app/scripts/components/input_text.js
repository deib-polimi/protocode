App.InputTextComponent = Ember.Component.extend({
  actions: {
    acceptChanges: function() {
      this.sendAction();
    }
  }
});
