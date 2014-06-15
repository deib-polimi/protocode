App.Container = App.UiControl.extend({
  name:         DS.attr('string', {defaultValue: 'DummyContainer'}),
  title:        DS.attr('string', {defaultValue: 'Dummy Container'}),
  width:        DS.attr('number', {defaultValue: 200}),
  height:       DS.attr('number', {defaultValue: 100}),

  uiControls:   DS.hasMany('uiControl', {polymorphic: true, inverse: 'parentContainer'})
});