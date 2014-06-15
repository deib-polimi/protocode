App.GridView = App.UiControl.extend({
  gridViewCells:    DS.hasMany('gridViewCell', {inverse: 'parentGridView'}),
  clickListener:    DS.belongsTo('clickListener')
});
/*
App.GridView.FIXTURES = [
  {
    id: 9,
    name: 'GridView1',
    gridViewCells: [1],
    posX: 10,
    posY: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingStart: 0,
    paddingEnd: 0,
    marginTop: 0,
    marginBottom: 0,
    marginStart: 0,
    marginEnd: 0,
    alignParentTop: false,
    alignParentBottom: true,
    alignParentStart: true,
    alignParentEnd: true,
    width: 300,
    height: 200,
    viewController: 2,
    parentContainer: null
  }
];*/