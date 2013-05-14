//<debug>
Ext.Loader.setPath({
    'Ext': 'st2/com'
});
//</debug>

/**
 * This application demonstrates the simple AJAX abilities of Sencha Touch.
 *
 * We setup a simple container which has a 2 buttons which will trigger a function to either make
 * a AJAX request using Ext.Ajax.request or a JSONP request using Ext.data.JsonP.
 */

//the first thing we do is define out application
Ext.application({
    startupImage: {
        '320x460': 'startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },
    name: "wechatReader",
    //requires defines the Components/Classes that our application requires.
    requires: [
        'Ext.Container',
        'Ext.Button',
        'Ext.List',
        'Ext.Toolbar',
        'Ext.TitleBar',
        'Ext.Ajax',
        'Ext.XTemplate'
    ],
    views: ['readerlist', 'page'],
    controllers: ['readerlist','page'],
    stores: ['dayline', 'readerlist','page'],
    launch: function() {
        //全局扩展函数
        window.Util = {
            getDay: function (day){  
                function doHandleMonth(month){  
                       var m = month;  
                       if(month.toString().length == 1){  
                          m = "0" + month;  
                       }  
                       return m;  
                }
               var today = new Date();  
                 
               var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          
          
               today.setTime(targetday_milliseconds); //注意，这行是关键代码    
                 
               var tYear = today.getFullYear();  
               var tMonth = today.getMonth();  
               var tDate = today.getDate();  
               tMonth = doHandleMonth(tMonth + 1);  
               tDate = doHandleMonth(tDate);  
               return tYear+"-"+tMonth+"-"+tDate;  
            }  
        };
        var panel = Ext.create('Ext.Panel', {
            id: 'xPanel',
            layout: 'card',
            items: [
                {
                    //列表页
                    xtype: "readerlist"
                },
                {
                    //阅读页
                    xtype: "page"
                }
            ]
        });
        
        Ext.Viewport.add(panel);
        panel.setActiveItem(0); // 默认激活第一个模块
    }
});

