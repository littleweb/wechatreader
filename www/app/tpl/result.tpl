<div class="UI-titleList main-data">
    <div class="list">
        <li class="item">
            <div class="text">每月还款</div>
            <div class="tail"><span class="month-money">{monthMoney}</span>元</div>
        </li>
        <li class="item">
            <div class="text">总支付利息</div>
            <div class="tail">{interest}元</div>
        </li>
        <li class="item">
            <div class="text">本息合计</div>
            <div class="tail">{allMoney}元</div>
        </li>
    </div>
</div>

<div class="tail-info">
    *以{title}<strong>{years}</strong>年<br />
    &nbsp;商贷利率：<strong>{sdLilv}%</strong>，公积金利率：<strong>{gjjLilv}%</strong><br />
    &nbsp;等额本息还款方式计算出以上结果
</div>

<div class="UI-titleList search-list">
    <h3 class="title">
        <span class="text">{city}买房贷款（10万元,12个月）</span>
        <a class="more-info" href="http://m.rong360.com/search.html?application_type=2&loan_limit=10&loan_term=12&utm_source=rong360&utm_medium=mortgage-calc&utm_campaign=rong360">更多<span style="positon:relatve;top:-2px;font-size:70%;">▶</span></a>
    </h3>
    <div class="list">
        <tpl for="searchData">
            <a class="item" href="http:{product_url}" target="_blank">
                <div class="text">
                    <div class="appicon"><img src="http:{icon_url}" /></div>
                    <div class="name"><strong>{product_name}</strong><br /><span class="desc">描述信息</span></div>
                </div>
                <div class="UI-sub-buttons tail">xxxxx/每月</div>
            </a>
        </tpl>
    </div>
</div>


<div class="UI-titleList search-list other-city">
    <div class="list">
        <a class="item" href="http://m.rong360.com/app/city" target="_blank">
            <div class="text">其他城市买房贷款</div>
            <div class="UI-sub-buttons tail">　</div>
        </a>
    </div>
</div>