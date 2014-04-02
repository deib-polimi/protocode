App.UiControlsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('uiControl');
    }
});
