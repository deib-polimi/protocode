App.GridView = App.UiControl.extend({
  gridViewCells:    DS.hasMany('gridViewCell', {inverse: 'parentGridView'}),
  clickListener:    DS.belongsTo('clickListener'),

  height:             DS.attr('number', {defaultValue: 200}), 

  xmlName:        'gridViews',

  toXml: function(xmlDoc) {
    var self = this;
    
    var promise = new Promise(function (resolve, reject) {
      var elem = xmlDoc.createElement(self.get('xmlName'));
      self.decorateXml(elem);

      var clickListener = self.get('clickListener');

      if (clickListener != null) {
          elem.appendChild(clickListener.toXml(xmlDoc));
      }

      self.get('gridViewCells').then(function (listViewCells) {
        
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