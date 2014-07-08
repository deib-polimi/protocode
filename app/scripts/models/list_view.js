App.ListView = App.UiControl.extend({
  listViewCells:    DS.hasMany('listViewCell', {inverse: 'parentListView'}),
  clickListener:    DS.belongsTo('clickListener'),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('listViews');
    this.decorateXml(elem);

    var clickListener = this.get('clickListener');

    if (clickListener != null) {
        elem.appendChild(clickListener.toXml(xmlDoc));
    }

    this.get('listViewCells').map(function(item) {
      elem.appendChild(item.toXml(xmlDoc));
    });
    
    return elem;
  }
});
/*
App.ListView.FIXTURES = [
  {
    id: 8,
    name: 'ListView',
    listViewCells: [1],
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
    alignParentTop: true,
    alignParentBottom: false,
    alignParentStart: true,
    alignParentEnd: true,
    width: 300,
    height: 300,
    viewController: 2,
    parentContainer: null
  }
];*/