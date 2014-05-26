App.ListView = App.UiControl.extend({
  listViewCells: DS.hasMany('listViewCell', {async: true, inverse: 'parentListView'})
});

App.ListView.FIXTURES = [
  {
    id: 8,
    name: 'ListView',
    listViewCells: [1],
    posX: 10,
    posY: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 8,
    paddingEnd: 8,
    marginTop: 0,
    marginBottom: 0,
    marginStart: 0,
    marginEnd: 0,
    alignParentTop: false,
    alignParentBottom: false,
    alignParentStart: true,
    alignParentEnd: true,
    width: 300,
    height: 300,
    viewController: 2,
    parentContainer: null
  }
];