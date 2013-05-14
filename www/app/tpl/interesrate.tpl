<div class="UI-titleList">
    <div class="title">商贷利率</div>
    <div class="list">
        <tpl for="listData['商贷利率']">
            <li class="item">
                <div class="text"><strong>{title}</strong></div>
                <div class="tail">{number}%</div>
            </li>
        </tpl>
    </div>
</div>

<div class="UI-titleList">
    <div class="title">公积金利率</div>
    <div class="list">
        <tpl for="listData['公积金利率']">
            <li class="item">
                <div class="text"><strong>{title}</strong></div>
                <div class="tail">{number}%</div>
            </li>
        </tpl>
    </div>
</div>

<div class="pub-date">*{pubDate}</div>