//page视图控制器
Ext.define('wechatReader.controller.page', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            //主面板
            main: '#xPanel',
            returnHome: "#PageReturn"     
        },
        control: {
            panel: {
                initialize: function(){

                }
            },
            returnHome: {
                tap: function(){
                     this.getMain().animateActiveItem(0, {
                            type: 'slide', 
                            direction: 'right', 
                            duration: 200,
                            listeners: {
                                animationend: function(){
                                    //Ext.getCmp("inputList").hide();
                                }
                            }
                    });                   
                }
            }
        }
    }
});
