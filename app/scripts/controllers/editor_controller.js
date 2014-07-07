App.EditorController = Ember.ObjectController.extend({

    actions: {
      generateAppModel: function() {
        var model = this.get('model').toXml();
        var blob = new Blob(
          ['<?xml version="1.0" encoding="ASCII"?>\n' + new XMLSerializer().serializeToString(model.documentElement)],
          {type: "application/xml;charset=ASCII"});
        saveAs(blob, "metamodel.xml");
      }
    }
});