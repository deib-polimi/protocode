App.ViewControllersRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('viewController');
    }
});
