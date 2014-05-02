App.ControlButtonIndexController = App.UiControlController.extend({

  needs: ['viewControllers'],

  navigationTarget: function(key, value) {

    // setter
    if (arguments.length > 1) {
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

    // getter
    return this.get('clickListener.navigation.destination');
  }.property(
    'model',
    'model.clickListener',
    'model.clickListener.navigation.destination')
  
});