App.ListView = DS.Model.extend({
  listViewCells: DS.hasMany('listViewCell', {async: true, inverse: 'parentListView'})
});

App.ListView.FIXTURES = [
  {
    id: 1,
    listViewCells: [1]
  }
];