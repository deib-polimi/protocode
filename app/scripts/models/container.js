App.Container = App.UiControl.extend({
  name:         DS.attr('string', {defaultValue: 'DummyContainer'}),
  title:        DS.attr('string', {defaultValue: 'Dummy Container'}),
  width:        DS.attr('number', {defaultValue: 200}),
  height:       DS.attr('number', {defaultValue: 100}),

  uiControls:   DS.hasMany('uiControl', {polymorphic: true, inverse: 'parentContainer'}),

  toXml: function(xmlDoc) {
    var elem = xmlDoc.createElement('container');
    this.decorateXml(elem);
    
    elem.setAttribute('title', this.get('title'));

    var uiControls = this.get('uiControls');

    uiControls.map(function(item) {
      elem.appendChild(item.toXml(xmlDoc));
    });
    
    return elem;
  }
});