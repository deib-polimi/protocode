App.MenuItem = DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('name'),
  menuItems: DS.belongsTo('navigation')
});

App.MenuItem.FIXTURES = [
  {
    id: 1,
    title: 'firstMenuItem'
  }
];