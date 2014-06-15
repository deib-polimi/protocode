App.Application = DS.Model.extend({
  name: DS.attr('string', {defaultValue: 'newApp'}),
  device: DS.belongsTo('device'),
  menu: DS.belongsTo('menu'),
  viewControllers: DS.hasMany('viewController', {inverse: 'application'})
});

/*App.Application.FIXTURES = [
  {
    id: 1,
    name: 'NewApp',
    menu: 1,
    device: 1,
    viewControllers: [1, 2]
  }
];*/