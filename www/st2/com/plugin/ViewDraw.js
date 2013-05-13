Ext.define('Ext.plugin.ViewDraw', {
    extend: 'Ext.Component',
    alias: 'plugin.ViewDraw',

    config: {
        //tpl地址
        tpl: '',
        //数据
        data: null
    },

    init: function(wrap) {
        var _data = this.config.data;
        //加载模板文件
        Ext.Ajax.request({
            url: this.config.tpl,
            success: function(rs) {
                var tpl = new Ext.XTemplate(rs.responseText);
                //执行渲染
                //console.log(tpl.apply(_data));
                wrap.setHtml(tpl.apply(_data));
            },
            scope: this
        });
    }
});
