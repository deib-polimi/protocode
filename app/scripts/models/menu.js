App.Menu = DS.Model.extend({
  menuItems: DS.hasMany('menuItem', {inverse: 'parentMenu'})
});

App.Menu.FIXTURES = [
  {
    id: 1,
    menuItems: [1]
  }
];