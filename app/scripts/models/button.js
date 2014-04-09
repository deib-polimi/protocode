App.Button = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  viewController: DS.belongsTo('viewController')
});

App.Button.FIXTURES = [
  {id: 1, name: 'Button1', title: 'Button 1', viewController: 1},
  {id: 2, name: 'Button2', title: 'Button 2', viewController: 1}
];