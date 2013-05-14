//list视图控制器
Ext.define('wechatReader.controller.readerlist', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            //主面板
            main: '#xPanel',
            //列表视图
            viewList: '#PageReaderlist',
            //控件：列表
            list: '#ReaderList',
            url: '#DataUrl',
            get: '#GetContent',
            //时间轴导航
            dayline: '#DayLineNav',
            pre: '#goPre',
            next: '#goNext',
            //文章页视图
            viewPage: '#PagePanel',
            viewPageTitle: '#PageTitle',
            viewPageContent: '#PageContent',
        },
        daylineData: null,
        daylineIndex: 0,
        pageUrl: 'app/data/getpage.txt',
        control: {
            dayline: {
                initialize: function(){
                    var _store = Ext.getStore("dayline");
                    var _data = [];
                    _store.each(function(item, data){
                        _data.push(item.data);
                    });
                    _data.reverse();
                    this.config.daylineData = _data;
                    //当前索引值
                    this.config.daylineIndex = _data.length-1;
                }
            },
            //上一天
            pre: {
                tap: function(){
                    var _index = this.config.daylineIndex-1;
                    var _storeList = Ext.getStore("readerlist");
                    _storeList.clearFilter();
                    _storeList.filter("date", this.config.daylineData[_index].date);
                    var _date = this.config.daylineData[_index].date;
                    this.syncData({title: (_date == window.Util.getDay(0))?"今天":_date});
                    this.getList().setStore(_storeList);
                    this.config.daylineIndex = _index;
                    this.getNext().setHidden(false);
                    if(_index == 0){
                        this.getPre().setHidden(true);
                    }          
                }
            },
            //下一天
            next: {
                tap: function(){
                    var _index = this.config.daylineIndex+1;
                    var _storeList = Ext.getStore("readerlist");
                    _storeList.clearFilter();
                    _storeList.filter("date", this.config.daylineData[_index].date);
                    var _date = this.config.daylineData[_index].date;
                    this.syncData({title: (_date == window.Util.getDay(0))?"今天":_date});
                    this.getList().setStore(_storeList);
                    this.config.daylineIndex = _index;
                    this.getPre().setHidden(false);
                    if(_index == (this.config.daylineData.length-1)){
                        this.getNext().setHidden(true);
                    }
                }
            },
            //页面视图
            page: {
                initialize: function(){
                    var _storeList = Ext.getStore("readerlist");
                    //console.log(_storeList.first().data);
                    _storeList.filter("date", window.Util.getDay(0));
                    console.log(_storeList);
                    this.getList().setStore(_storeList);
                    this.syncData({title: "今天"});
                }
            },
            //获取数据
            get: {
                tap: function(){
                    var url = this.getUrl()._value;
                    var _storeList = Ext.getStore("readerlist");
                    var _storeDays = Ext.getStore("dayline");

                    //获取数据
                    Ext.Ajax.request({
                        url: url,
                        //成功则执行数据更新
                        success: function(response) {
                            var _day = window.Util.getDay(0);
                            //时间轴数据逻辑
                            if(_storeDays.getCount() > 0){
                                if(_storeDays.first().data.date != _day){
                                    _storeDays.add({
                                        "index": _storeDays.first().data.index+1,
                                        "date": _day
                                    });
                                    _storeDays.sync();
                                }
                            }else{
                                 _storeDays.add({
                                    "index": 0,
                                    "date": _day
                                });
                                _storeDays.sync();                               
                            }

                            var content = response.responseText;
                            var _newVo = {
                                "title": content.match(/\<title\>([\s\S]*)\<\/title\>/)[1],
                                "face": "http://mmsns.qpic.cn/mmsns/" + content.match(/http\:\/\/mmsns\.qpic\.cn\/mmsns\/(.+?)\"/)[1], 
                                "content": content.match(/\<div class="text"\>([\s\S]*?)\<\/div\>/)[1],
                                "status": "todo"
                            };

                            _newVo.index = _storeList.getCount()>0?_storeList.first().data.index+1:0;
                            _newVo.date = window.Util.getDay(0);
                            _storeList.add(_newVo);
                            _storeList.sync();
                        },
                        //失败则提示
                        failure: function(){
                            Ext.Msg.show("获取出错，稍后再试！");
                        }
                    });
                    //alert(this.getUrl()._value);
                }
            },
            list: {
                select: function(list, model, ops){
                    //同步更新本地存储列表状态
                    model.set("status", "done");
                    var _store = Ext.getStore("readerlist");
                    _store.sync();


                    //更新文章页数据
                    //this.getViewPageTitle().setTitle(model.get('title'));
                    var _data = {
                        title: model.get("title"),
                        content: model.get("content")
                    };
                    this.getViewPageContent().setData(_data);
                    //切换视图
                    this.getMain().animateActiveItem(1, {
                            type: 'slide', 
                            direction: 'left', 
                            duration: 200,
                            listeners: {
                                animationend: function() {
                                }
                            }
                    });
                }
            }
        }
    },
    //同步数据
    syncData: function(vo){
        //this.getPre().setText(vo.pre);
        //this.getNext().setText(vo.next);
        this.getDayline().setTitle(vo.title);
    }
});
