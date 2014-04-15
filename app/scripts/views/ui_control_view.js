App.UiControlView = Ember.View.extend(App.UiMoveable, {
  templateName: 'views/ui_control_view',
  classNames: ['ui-control'],
  classNameBindings: ['active'],
  attributeBindings: ['style'],

  uiControlType: function () {
    var controlType = this.get('context').constructor.toString();
    console.log('Choose view for: ' + controlType);

    switch (controlType) {
      case ('App.Button'):
        console.log('chosen Button!');
        return App.ButtonView;
        break;
    }
  }.property(),

  style: function() {
    return this.get('positionStyle');
  }.property('positionStyle')



});