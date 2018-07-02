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
    created: function () {
        // $.ajax({
        //     url: 'http://api.map.baidu.com/location/ip',
        //     type: 'GET',
        //     data: {
        //         ip: '114.216.24.123',
        //         ak: 'iE6Nttmdl4TXocGQHgYh0W44aeERi4Gs',
        //         coor: 'bd09ll'
        //     },
        //     dataType: 'jsonp',  // 指定服务器返回数据类型，默认callback=?
        //     // jsonpCallback: customcallback,    // 自定义回调函数 callback=customcallback
        //     // jsonp: 'jcallback',  // 指定参数名称 jcallback=customcallback
        //     success: function (data) {
        //         this.city = data.content.address_detail.city.slice(0, 2);
        //         console.log(this.city);
        //     }
        // })   
    },
    methods: {
        createMap: function () {
            var map = new BMap.Map("map");    // 创建Map实例
            var mapData = {
                ip: '114.216.24.123',
                ak: 'iE6Nttmdl4TXocGQHgYh0W44aeERi4Gs',
                coor: 'bd09ll'
            }
            // 第一种跨域方法
            // $.get('http://api.map.baidu.com/location/ip', mapData, function(data) {
            //     console.log(data);
            // }, 'jsonp');
            // function customcallback (data) {
            //     console.log('customcallback data');
            // }
            // 第二种跨域方法，success 和 jsonpCallback 同时只存在一个
            $.ajax({
                // async: false,
                url: 'http://api.map.baidu.com/location/ip',
                type: 'GET',
                data: {
                    ip: '114.216.24.123',
                    ak: 'iE6Nttmdl4TXocGQHgYh0W44aeERi4Gs',
                    coor: 'bd09ll'
                },
                dataType: 'jsonp',  // 指定服务器返回数据类型，默认callback=?
                // jsonpCallback: customcallback,    // 自定义回调函数 callback=customcallback
                // jsonp: 'jcallback',  // 指定参数名称 jcallback=customcallback
                success: function (data) {
                    sessionStorage.city = data.content.address_detail.city.slice(0, 2);     // 把city存入sessionStorage
                }
            });

            var city = sessionStorage.getItem('city')
            map.centerAndZoom(city, 15);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            // map.addControl(new BMap.MapTypeControl({
            //     mapTypes:[
            //         BMAP_NORMAL_MAP,
            //         BMAP_HYBRID_MAP
            //     ]
            // }));	  
            // map.setCurrentCity("苏州");       // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            // 添加定位控件
            var geolocationControl = new BMap.GeolocationControl();
            geolocationControl.addEventListener("locationSuccess", function(e){
                // 定位成功事件
                var address = '';
                address += e.addressComponent.province;
                address += e.addressComponent.city;
                address += e.addressComponent.district;
                address += e.addressComponent.street;
                address += e.addressComponent.streetNumber;
                console.log("当前定位地址为：" + address);
            });
            geolocationControl.addEventListener("locationError",function(e){
                // 定位失败事件
                console.log(e.message);
            });
            map.addControl(geolocationControl);
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

