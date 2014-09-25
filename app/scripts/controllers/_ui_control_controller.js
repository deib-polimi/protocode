App.UiControlController = Ember.ObjectController.extend(App.Saveable, {
  alignTop: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.alignTop'),

  alignBottom: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.alignBottom'),

  alignStart: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.alignStart'),

  alignEnd: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.alignEnd'),


  above: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.above'),

  below: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.below'),

  toStartOf: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.toStartOf'),

  toEndOf: function(key, value, previousValue) {
    // setter
    if (arguments.length > 1) {
      return this.handleConstraint(key, value, previousValue);
    }

    // getter
    return this.handleConstraint(key);
  }.property('model.toEndOf'),


  handleConstraint: function(key, value, previousValue) {
    var model = this.get('model');

    // setter
    if (arguments.length > 1) {
      if (this.isGoodConstraint(model, key, value)) {
        model.set(key, value);
        model.save();
      }
      else {
        alert('Found circularity in constraints. Please restore previous value.');
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
    var uiControlsToCheck = model.getRelatedUiControls().concat(value).uniq();
    var self = this;


    while (!($(uiControls).not(uiControlsToCheck).length == 0 && $(uiControlsToCheck).not(uiControls).length == 0) && !uiControlsToCheck.contains(model)) {
      uiControls = uiControlsToCheck;

      uiControlsToCheck = uiControlsToCheck.reduce(function (results, uiControl) {
        return results.concat(uiControl.getRelatedUiControls());
      }, []).uniq();

    }

    return !uiControlsToCheck.contains(model);
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