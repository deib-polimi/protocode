App.InputTextComponent = Ember.Component.extend({
  attributeBindings: ['type'],
  
  actions: {
    acceptChanges: function() {
      this.sendAction();
    }
  }
});
