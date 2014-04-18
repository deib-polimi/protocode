App.Container = App.UiControl.extend({
  width: DS.attr('number', {defaultValue: 200}),
  height: DS.attr('number', {defaultValue: 100}),
  uiControls: DS.hasMany('uiControl', {async: true, polymorphic: true})
});