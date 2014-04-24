App.Application = DS.Model.extend({
  name: DS.attr('string'),
  device: DS.belongsTo('device')
});

App.Application.FIXTURES = [
  {id: 1, name: 'NewApp', device: 1}
];