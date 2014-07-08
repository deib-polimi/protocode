App.ListViewCell = DS.Model.extend({
  name:           DS.attr('string', {defaultValue: 'ListView1'}),
  title:          DS.attr('string', {defaultValue: 'List View'}),
  parentListView: DS.belongsTo('listView', {inverse: 'listViewCells'}),

  // Used to reload menuItems
  didCreate: function() {
    this._super();
    
    this.get('parentListView.listViewCells').pushObject(this)
    this.get('parentListView').save();
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