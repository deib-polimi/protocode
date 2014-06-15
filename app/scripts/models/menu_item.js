App.MenuItem = DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('string'),
  parentMenu: DS.belongsTo('menu', {inverse: 'menuItems'}),
  navigation: DS.belongsTo('navigation'),

  // Used to reload menuItems
  didCreate: function() {
    this._super();
    
    var self = this;
    this.get('parentMenu.menuItems').pushObject(self);
  }
});


/*
App.MenuItem.FIXTURES = [
  {
    id: 1,
    title: 'First Item',
    name: 'firstMenuItem',
    parentMenu: 1
  }
];
*/