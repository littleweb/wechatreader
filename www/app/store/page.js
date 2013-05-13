Ext.define('wechatReader.store.page', { 
    extend: 'Ext.data.Store', 
    config: {
        //model: "demo.model.result",
        fields: ['id', 'title', 'isSub', 'number', 'tail'],
        data: [
            {
                "id": "InputShangDai",
                "title": "商贷金额",
                "isSub": false,
                "number": "0",
                "tail": "万"
            },
            {
                "id": "InputGongJiJin",
                "title": "公积金金额",
                "isSub": false,
                "number": "0",
                "tail": "万"
            },
            {
                "id": "InputYears",
                "title": "贷款期限",
                "isSub": false,
                "number": "30",
                "tail": "年"
            },
            {
                "id": "InputSdLilv",
                "title": " 商贷利率",
                "isSub": true,
                "number": "6.55",
                "tail": "%"
            },
            {
                "id": "InputGjjLilv",
                "title": "公积金利率",
                "isSub": true,
                "number": "4.30",
                "tail": "%"
            },
            {
                "id": "InputFlower",
                "title": "",
                "isSub": false,
                "number": "",
                "tail": ""
            }
        ]
    }
});  
