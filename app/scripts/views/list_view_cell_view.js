App.ListViewCellView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-list-view-cell', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/list_view_cell_view'
});