Ext.define('AccordionListExample.store.AsyncTask', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'AccordionListExample.model.Task'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'AccordionListExample.model.Task',
        proxy: {
            type: 'ajax',
            url: 'resources/data/asyncData.json'
        }
    }

});
