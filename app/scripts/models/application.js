App.Application = DS.Model.extend({
  name: DS.attr('string'),
  deviceId: DS.attr('number')
});

App.Application.FIXTURES = [
  {id: 1, name: 'NewApp', deviceId: 2}
];