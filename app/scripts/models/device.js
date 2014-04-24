App.Device = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  platform: DS.attr('string'),
});

App.Device.FIXTURES = [
  {id: 1, name: 'iPhone5s', label: 'iPhone 5s', platform: 'ios'},
  {id: 2, name: 'Nexus', label: 'Nexus 5', platform: 'android'}
];