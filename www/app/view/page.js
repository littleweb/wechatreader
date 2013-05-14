Ext.define('wechatReader.view.page', {
	extend: "Ext.Panel",
	xtype: "page",
    config: {
        layout: {
           type: 'vbox',
           align: 'stretch'
        },
        id: 'PagePanel',
        items: [
            //标题栏
            {
                xtype: 'titlebar',
                id: 'PageTitle',
                cls: 'UI-sub-titlebar',
                docked: 'top',
                title: "今天",
                items:[
                    {
                        xtype: 'button',
                        id: 'PageReturn',
                        cls: 'UI-sub-buttons ok',
                        text: '返回',
                        align: "left"
                    },
                    {
                        xtype: 'button',
                        id: 'PageShare',
                        cls: 'UI-sub-buttons ok',
                        text: '分享',
                        align: "right"
                    }
               ]
            },
            //主体内容容器
            {
                xtype: 'panel',
                id: 'PageContent',
                cls: 'About-mainContent',
                title: '阅读',
                padding: '0 10px',
                flex: 1,
                scrollable: true,
                tpl: '<h1>{title}</h1><div class="content">{content}</div>'
            }
        ]
    }
});