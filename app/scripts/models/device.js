App.Device = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  platform: DS.belongsTo('platform')
});

App.Device.FIXTURES = [
  {id: 1, name: 'iPhone5s', label: 'iPhone 5s', platform: 1},
  {id: 2, name: 'Nexus', label: 'Nexus 5', platform: 2}
];