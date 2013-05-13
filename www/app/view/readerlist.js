Ext.define('wechatReader.view.readerlist', {
	extend: "Ext.Panel",
	xtype: "readerlist",
    config: {
        layout: {
           type: 'fit',
           align: 'stretch'
        },
        id: 'ListPanel',
        items: [
            //标题栏
            {
                xtype: 'titlebar',
                id: 'DayLineNav',
                cls: 'UI-sub-titlebar',
                docked: 'bottom',
                title: "今天",
                ui: 'light',
                items:[
                    {
                        xtype: 'button',
                        id: 'goPre',
                        text: '<',
                        ui: 'back',
                        align: "left"
                    },
                    {
                        xtype: 'button',
                        id: 'goNext',
                        text: '>',
                        hidden: true,
                        ui: 'forward',
                        align: "right"
                    }
               ]
            },
            //主体列表
            {
                xtype: "list",
                id: 'ReaderList',
                flex: 1,
                cls: 'Page-readerlist',
                style: 'border:none',
                itemHeight: 36,
                scrollable: true,
                itemTpl: '<div class="item {status}"><h2 class="title"><em></em>{title}</h2></div>'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'DataUrl'
                    },
                    {xtype: 'spacer'},
                    {
                        xtype: 'button',
                        id: 'GetContent',
                        text: '获取'
                    }
                ]
            }
        ]
    }
});