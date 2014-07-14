App.EditorController = Ember.ObjectController.extend({

    actions: {
      generateAppModel: function() {
        var model = this.get('model').toXml();
        var xmlString = '<?xml version="1.0" encoding="ASCII"?>\n' + new XMLSerializer().serializeToString(model.documentElement);
        var blob = new Blob(
          [vkbeautify.xml(xmlString)],
          {type: "application/xml;charset=ASCII"});
        saveAs(blob, "protocode.xmi");
      }
    }
});