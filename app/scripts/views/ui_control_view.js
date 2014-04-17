App.UiControlView = Ember.View.extend(App.UiMoveable, {
  templateName: 'views/ui_control_view',
  classNames: ['ui-control'],
  classNameBindings: [
    'active',
    'alignParentTop:align-parent-top',
    'alignParentBottom:align-parent-bottom',
    'alignParentStart:align-parent-start',
    'alignParentEnd:align-parent-end'],
  attributeBindings: ['style'],

  alignParentTop: function() {
    return this.get('context.alignParentTop');
  }.property('context.alignParentTop'), 

  alignParentBottom: function() {
    return this.get('context.alignParentBottom');
  }.property('context.alignParentBottom'), 

  alignParentStart: function() {
    return this.get('context.alignParentStart');
  }.property('context.alignParentStart'), 

  alignParentEnd: function() {
    return this.get('context.alignParentEnd');
  }.property('context.alignParentEnd'), 

  uiControlType: function () {
    var controlType = this.get('context').constructor.toString();
    console.log('Choose view for: ' + controlType);

    switch (controlType) {
      case ('App.Button'):
        return App.ButtonView;
        break;

      case ('App.Container'):
        console.log('chosen Container!');
        return App.ContainerView;
        break;
    }
  }.property(),

  style: function() {
    var result = '';

    if (!this.get('alignParentTop')) {
      result += this.get('positionStyleY');
    }

    if (!this.get('alignParentStart')) {
      result += this.get('positionStyleX');
    }

    return result;
  }.property('positionStyleX', 'positionStyleY', 'context.alignParentTop', 'context.alignParentStart')



});