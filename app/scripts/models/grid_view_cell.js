App.GridViewCell = DS.Model.extend({
  name:           DS.attr('string', {defaultValue: 'GridView1'}),
  title:          DS.attr('string', {defaultValue: 'Grid View'}),
  parentGridView: DS.belongsTo('gridView', {inverse: 'gridViewCells'}),

  // Used to reload menuItems
  didCreate: function() {
    this._super();
    
    this.get('parentGridView.gridViewCells').pushObject(this);
    this.get('parentGridView').save();
  },

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('gridViewCells');

    elem.setAttribute('title', this.get('title'));
    
    return elem;
  }
});

/*
App.GridViewCell.FIXTURES = [
  {
    id: 1,
    name: 'GridViewCell1',
    title: 'Grid View Cell 1',
    parentGridView: 9
  }
];*/