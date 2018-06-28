<template>
    <div class="about row">
        <div class="col-md-3 col-sm-3" id="bio">
            <img src="@/assets/hailo.jpg" alt="">
            <ul>
                <!-- <li v-for="(value, key) in user" :key="key" :class="[{'email': key == 'email'}]"><span class="glyphicon glyphicon-user"></span>&nbsp;{{value}}-{{key}}</li> -->
                <li><span class="glyphicon glyphicon-user"></span>&nbsp;{{user.username}}</li>
                <li><span class="glyphicon glyphicon-envelope"></span>&nbsp;<a>{{user.email}}</a></li>
                <li><span class="glyphicon glyphicon-map-marker"></span>&nbsp;{{user.location}}</li>
            </ul>
            <div id="map"></div>
        </div>        
        <div class="col-md-3 col-sm-3" id="hobby">shoes</div>        
        <div class="col-md-3 col-sm-3">music</div>        
        <div class="col-md-3 col-sm-3">photos</div>        
        <router-view></router-view>        
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            user: {
                username: 'LiunanChen',
                location: 'Suzhou Jiangsu',
                email: 'liunan_chen@163.com'
            }
        }
    },
    mounted: function () {
        this.createMap();
    },
    methods: {
        createMap: function () {
            var map = new BMap.Map("map");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));	  
            map.setCurrentCity("苏州");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        }
    }
}
</script>

<style scoped>
.about {
    width: 100%;
    height: inherit;
    padding: 60px 0 60px 0;
}
#bio {
    height: inherit;
    /* width: inherit; */
    border-right: purple 2px solid;
}
#hobby {
    height: inherit;
    /* width: inherit; */
}
ul {
    list-style-type: none;
    margin: 10px 0 0 20px;
}
ul li {
    margin-top: 4px;
}
#bio a:hover {
    cursor: pointer;
    text-decoration-line: none;
    /* padding-right: 0px; */
}
/* .email {
    cursor: pointer;
    text-decoration-line: underline;
    color: lightskyblue;
} */
img {
    border: paleturquoise 1px solid;
    display: block;
    margin-left: 60px;
}
#map {
    width: 100%;
    /* padding: 20px 0 0 4px; */
    height: 200px;   
}
</style>

