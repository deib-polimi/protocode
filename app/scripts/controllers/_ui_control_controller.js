App.UiControlController = Ember.ObjectController.extend(App.Saveable, {
  alignTop: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),
  alignBottom: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),
  alignStart: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),
  alignEnd: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),

  above: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),
  below: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),
  toStartOf: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),
  toEndOf: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property(),

  handleConstraint: function(key, value, previousValue) {
    var model = this.get('model');

    // setter
    if (arguments.length > 1) {
      if (this.isGoodConstraint(model, key, value)) {
        model.set(key, value);
        model.save();
      }
      else {
        console.log('AHHHHH');
        return previousValue;
      }
    }

    // getter
    return model.get(key);
  },

  isGoodConstraint: function(model, key, value) {
    if (value == null) {
      return true;
    }

    var uiControls = [];
    var uiControlsToCheck = this.getRelatedUiControls(model).concat(value).uniq();
    var self = this;


    while (!($(uiControls).not(uiControlsToCheck).length == 0 && $(uiControlsToCheck).not(uiControls).length == 0) && !uiControlsToCheck.contains(model)) {
      uiControls = uiControlsToCheck;

      uiControlsToCheck = uiControlsToCheck.reduce(function (results, uiControl) {
        return results.concat(self.getRelatedUiControls(uiControl));
      }, []).uniq();

    }

    return !uiControlsToCheck.contains(model);
  },

  getRelatedUiControls: function(model) {
    var constraints = [
      'alignTop',
      'alignBottom',
      'alignStart',
      'alignEnd',
      'above',
      'below',
      'toStartOf',
      'toEndOf'];

    return constraints.map(function (constraint) {
      return model.get(constraint);
    }).filter(function (item) {return item != null;});
  },

  actions: {
    deleteUiControl: function() {
      var controlToDelete = this.get('model');

      if (this.get('parentContainer')) {
        var uiControls = this.get('parentContainer.uiControls');
        uiControls.removeObject(controlToDelete);
        this.get('parentContainer').save(); 
      }
      
      else {
        var viewController = this.get('viewController');
        viewController.get('uiControls').then(function (uiControls) {
          uiControls.removeObject(controlToDelete);
          viewController.save();
        });
        
      }

      controlToDelete.deleteRecord();
      controlToDelete.save();
      
      this.transitionToRoute('viewController');
    }
  }

});