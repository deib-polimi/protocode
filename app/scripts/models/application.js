App.Application = DS.Model.extend({
  name: DS.attr('string'),
  device: DS.belongsTo('device'),
  menu: DS.belongsTo('menu'),
  viewControllers: DS.hasMany('viewController')
});

App.Application.FIXTURES = [
  {
    id: 1,
    name: 'NewApp',
    menu: 1,
    device: 2
  }
];