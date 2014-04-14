App.UiControlView = Ember.View.extend({
  templateName: 'views/ui_control_view',

  uiControlType: function () {
    var controlType = this.get('context').constructor.toString();
    console.log('Choose view for: ' + controlType);

    switch (controlType) {
      case ('App.Button'):
        console.log('chosen Button!');
        return App.ButtonView;
        break;
    }
  }.property()



});