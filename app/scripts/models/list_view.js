App.ListView = App.UiControl.extend({
  listViewCells:    DS.hasMany('listViewCell', {async:true, inverse: 'parentListView'}),
  clickListener:    DS.belongsTo('clickListener'),

  height:             DS.attr('number', {defaultValue: 200}), 

  toXml: function(xmlDoc) {
    var self = this;
    
    var promise = new Promise(function (resolve, reject) {
      var elem = xmlDoc.createElement('listViews');
      self.decorateXml(elem);

      var clickListener = self.get('clickListener');

      if (clickListener != null) {
          elem.appendChild(clickListener.toXml(xmlDoc));
      }

      self.get('listViewCells').then(function (listViewCells) {
        
        listViewCells.map(function(item) {
          elem.appendChild(item.toXml(xmlDoc));
        });

        resolve(elem);
      });
    });

    return promise;
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