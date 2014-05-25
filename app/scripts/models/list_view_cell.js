App.ListViewCell = DS.Model.extend({
  title:          DS.attr('string', {defaultValue: 'List View'}),
  parentListView: DS.belongsTo('listView', {inverse: 'listViewCells'})
});

App.ListViewCell.FIXTURES = [
  {
    id: 1,
    parentListView: 1
  }
];