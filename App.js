Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
    	console.log("works");
    	this._loadData();
    },

    _loadData: function() {
    	var myStore = Ext.create('Rally.data.wsapi.Store', {
		    model: 'User Story',
		    autoLoad: true,
		    listeners: {
		        load: function(store, data, success) {
		            console.log("got data",store, data, success);
	            	this._loadGrid(myStore);
		        },
		        scope: this
		    },
		    fetch: ['Name', 'ScheduleState']
		});
    },

    _loadGrid: function(myStoryStore) {
    	var myGrid = Ext.create('Rally.ui.grid.Grid', {
									store: myStoryStore,
									columnCfgs: [
										'FormattedID', 'Name', 'ScheduleState'
									]	
								 });

    	console.log("my grid", myGrid);

    	this.add(myGrid);
    }
});
