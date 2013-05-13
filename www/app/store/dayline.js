Ext.define('wechatReader.store.dayline', { 
    extend: 'Ext.data.Store', 
    config: {
        fields: ['index', 'date'],
        sorters: {
            property: 'index',
            direction: 'DESC'
        },
        proxy: {
            type: 'localstorage',
            id: 'wechatReaderDayLine'
        },
        autoLoad:true,
    }
});  
