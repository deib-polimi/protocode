App.MenuItem = DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('name'),
  menuItems: DS.belongsTo('navigation'),
  parentMenu: DS.belongsTo('menu', {inverse: 'menuItems'})
});

App.MenuItem.FIXTURES = [
  {
    id: 1,
    title: 'First Item',
    name: 'firstMenuItem',
    parentMenu: 1
  }
];