App.UiDroppable = Ember.Mixin.create({
  classNameBindings: ['draggingOver'],

  draggingOver: false,

  dragEnter: function(event) {
    this.set('draggingOver', true);
  },

  dragLeave: function(event) {
    this.set('draggingOver', false);
    return false;
  },

  dragOver: function(event) {
    this.set('draggingOver', true);
    event.preventDefault();
    return false;
  },

  drop: function(event) {
    event.preventDefault();
    alert(event.dataTransfer.getData('uiControlType'));
    this.get('controller').send('addUiControl', event.dataTransfer.getData('uiControlType'), this);
    this.set('draggingOver', false);

    // used to prevent multiple fires of drop in nested views
    return false;
  }
});