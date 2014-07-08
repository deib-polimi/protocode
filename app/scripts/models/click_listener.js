App.ClickListener = DS.Model.extend({
  navigation: DS.belongsTo('navigation'),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('clickListener');

    var navigation = this.get('navigation');

    if (navigation != null) {
      elem.appendChild(navigation.toXml(xmlDoc));
    }
    
    return elem;
  }
});