App.MenuItem = DS.Model.extend({
  title: DS.attr('string'),
  menuItems: DS.belongsTo('navigation')
});

App.MenuItem.FIXTURES = [
  {
    id: 1,
    title: 'firstMenuItem'
  }
];