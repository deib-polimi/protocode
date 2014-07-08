App.ListViewCell = DS.Model.extend({
  name:           DS.attr('string', {defaultValue: 'ListView1'}),
  title:          DS.attr('string', {defaultValue: 'List View'}),
  parentListView: DS.belongsTo('listView', {inverse: 'listViewCells'}),

  // Used to reload menuItems
  didCreate: function() {
    this._super();
    
    var self = this;
    this.get('parentListView.listViewCells').then(function (listViewCells) {
      listViewCells.pushObject(self);
    });
  },

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('listViewCells');

    elem.setAttribute('title', this.get('title'));
    
    return elem;
  }
});
/*
App.ListViewCell.FIXTURES = [
  {
    id: 1,
    name: 'ListViewCell1',
    title: 'List View Cell 1',
    parentListView: 8
  }
];*/