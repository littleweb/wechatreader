<div class="UI-titleList copy-info">
    <div class="title">关于房贷计算器</div>
    <div class="list">
        <li class="item copyright">
            <div class="text"><strong>版本</strong></div>
            <div class="tail">1.0</div>
        </li>
        <li class="item">
            <div class="text"><strong>意见反馈</strong></div>
            <div class="tail"><span class="UI-sub-buttons more"></span></div>
        </li>
        <li class="item">
            <div class="text"><strong>请给我打分鼓励</strong></div>
            <div class="tail"><span class="UI-sub-buttons more"></span></div>
        </li>
    </div>
</div>
<div class="UI-titleList app-list">
    <div class="title">融360出品</div>
    <div class="list">
        <tpl for="data">
            <a class="item" href="{url}">
                <div class="text">
                    <div class="appicon"><img src="{icon}" /></div>
                    <div class="name"><strong>{name}</strong><br /><span class="desc">{desc}</span></div>
                </div>
                <div class="tail UI-sub-buttons free-down">免费</div>
            </a>
        </tpl>
    </div>
</div>