App.MenuItem = DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('string'),
  parentMenu: DS.belongsTo('menu', {inverse: 'menuItems'}),

  // Used to reload menuItems
  didCreate: function() {
    var self = this;
    this.get('parentMenu.menuItems').then(function (menuItems) {
      menuItems.pushObject(self);
    });
  }
});



App.MenuItem.FIXTURES = [
  {
    id: 1,
    title: 'First Item',
    name: 'firstMenuItem',
    parentMenu: 1
  }
];