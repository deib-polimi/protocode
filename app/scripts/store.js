//App.ApplicationAdapter = DS.FixtureAdapter;

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'protocode'
});
