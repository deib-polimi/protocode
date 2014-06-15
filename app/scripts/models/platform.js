App.Platform = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  devices: DS.hasMany('device')
});
/*
App.Platform.FIXTURES = [
  {id: 1, name: 'ios', label: 'iOS', devices: [1]},
  {id: 2, name: 'android', label: 'Android', devices: [2]}
];*/