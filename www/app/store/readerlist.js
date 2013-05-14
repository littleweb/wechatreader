Ext.define('wechatReader.store.readerlist', { 
    extend: 'Ext.data.Store', 
    config: {
        fields: ['index', 'title', 'desc', 'face', 'content', 'status', 'date'],
        /*
        data: [
            {
                title: '融360贷款',
                desc: '随时随地比较贷款', 
                face: 'app/assets/images/rong360.jpg', 
                content: 'itms-apps://itunes.apple.com/app/id574727794',
                status: 'todo',
                date: '2013-05-09'
            },
            {
                title: '融360贷款',
                desc: '随时随地比较贷款', 
                face: 'app/assets/images/rong360.jpg', 
                content: 'itms-apps://itunes.apple.com/app/id574727794',
                status: 'todo',
                date: '2013-05-09'
            },
            {
                title: '融360贷款',
                desc: '随时随地比较贷款', 
                face: 'app/assets/images/rong360.jpg', 
                content: 'itms-apps://itunes.apple.com/app/id574727794',
                status: 'todo',
                date: '2013-05-09'
            }
        ],
        */
        sorters: {
            property: 'index',
            direction: 'DESC'
        },
        proxy: {
            type: 'localstorage',
            id: 'wechatReader'
        },
        autoLoad:true,
    }
});  
