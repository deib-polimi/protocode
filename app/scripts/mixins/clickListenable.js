App.ClickListenable = Ember.Mixin.create({
  navigationTarget: function(key, value) {

    // setter
    if (arguments.length > 1) {

      // Delete
      if (value == null) {
        var clickListener = this.get('clickListener');
        if (clickListener != null) {
          var navigation = clickListener.get('navigation');
          navigation.deleteRecord();
          navigation.save();
          clickListener.deleteRecord();
          clickListener.save();
        }
      }
      else {
        var clickListener = this.get('clickListener');

        if (clickListener == null) {
          clickListener = this.store.createRecord('clickListener');

          var navigation = this.store.createRecord('navigation', {destination: value});
          navigation.save();

          clickListener.set('navigation', navigation);
          clickListener.save();

          var button = this.get('model');
          button.set('clickListener', clickListener);
          button.save();
        }
        else {
          var navigation = clickListener.get('navigation');
          navigation.set('destination', value);
          navigation.save()
        }
      }

    }

    // getter
    return this.get('clickListener.navigation.destination');
  }.property(
    'model',
    'model.clickListener',
    'model.clickListener.navigation.destination')
});