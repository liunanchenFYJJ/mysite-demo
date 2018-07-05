<template>
    <div class="container">
        <div id="container"></div>
        <div id="tip"></div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            companys: [
                {cname: '联电能源', address: '地址 :北京市朝阳区望京阜荣街10号首开广场4层', position: [120.72449,31.254767]},
                {cname: 'a', address: 'a', position: [120.70439,31.251647]},
                {cname: 'b', address: 'a', position: [120.74439,31.253647]}
            ],
            myPosition: null,
            map: null,
            markerList: []
        }
    },
    mounted: function () {
        // this.createGDMap();
        this.createGDMap1();
        setInterval(() => {     //每隔10秒获取一次新位置
            const step = 0.01;
            this.getMyposition(step);
        }, 10000);
        // this.addMarkers();
    },
    methods: {
        createGDMap1: function () {
            var self = this;
            self.map = new AMap.Map('container');
            console.log(self.map);
        },
        addMarkers: function () {
            var self = this;
            self.map.clearMap();  // 清除地图覆盖物            
            // var markerList = []
            for (let i = 0; i < self.companys.length; i++) {
                self.markerList[i] = new AMap.Marker({
                    position: new AMap.LngLat(self.companys[i].position[0], self.companys[i].position[1]),
                });
                AMap.event.addListener(self.markerList[i], 'click', function() {
                    infoWindow.open(self.map, self.markerList[i].getPosition());
                });
                var infoWindow = new AMap.InfoWindow({
                    content: 'hello',  //使用默认信息窗体框样式，显示信息内容
                    offset: new AMap.Pixel(0, -20)
                });
            }
            self.map.add(self.markerList);
            self.map.setFitView();            
        },
        getMyposition: function (step) {
            var self = this;
            var map = new AMap.Map('container');            
            map.plugin('AMap.Geolocation', function() {
                var geolocation = new AMap.Geolocation({
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(60, 80),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,     
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
                })

                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', onComplete);
                AMap.event.addListener(geolocation, 'error', onError);

                function onComplete (data) {
                    console.log('success');
                    var mylnglat = new AMap.LngLat(data.position.getLng() + step, data.position.getLat() + step);
                    self.myPosition = mylnglat;
                    var mymarker = new AMap.Marker({
                        map: map,
                        position: mylnglat
                    });
                    // self.markerList.push(mymarker);
                    console.log(mylnglat.getLng());
                    // map.setFitView();
                    for (let i = 0; i < self.companys.length; i++) {
                        new AMap.Polyline({
                            map: map,
                            strokeColor: 'red',
                            path: [self.myPosition, self.companys[i].position]
                        })
                        var lnglat = new AMap.LngLat(self.companys[i].position[0], self.companys[i].position[1]);
                        if (lnglat) {
                            new AMap.Text({
                                text: '两点相距' + Math.round(mylnglat.distance(lnglat)) + '米',
                                position: mylnglat.divideBy(2).add(lnglat.divideBy(2)),
                                map: map,
                                style: {'background-color':'#ccccff',
                                        'border-color':'green',
                                        'font-size':'12px'}
                            })
                        }
                    }                    
                }

                function onError (data) {
                    console.log('error');
                    // document.getElementById('tip').innerHTML = '定位失败';                    
                }
            })
        },
        createGDMap: function () {
            var self = this;
            var map, geolocation;
            //加载地图，调用浏览器定位服务
            map = new AMap.Map('container');
            map.clearMap();  // 清除地图覆盖物
            // for (let i = 0; i < self.companys.length; i++) {
            //     addMarker(i);           
            // }
            // function addMarker(i) {
            //     // map.clearMap();
            //     var marker = new AMap.Marker({
            //         icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            //         position: self.companys[i].position
            //     });
            //     //鼠标点击marker弹出自定义的信息窗体
            //     AMap.event.addListener(marker, 'click', function() {
            //         infoWindow.open(map, marker.getPosition());
            //     });        
            //     //构建信息窗体中显示的内容
            //     var info = [];
            //     info.push("<div><div><img style=\"float:left;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div><br/>");
            //     info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>");
            //     info.push(self.companys[i].cname);
            //     info.push("</b><br/>电话 : 010-84107000   邮编 : 100102<br/>");
            //     info.push("</div></div>");
            //     var infoWindow = new AMap.InfoWindow({
            //         content: info.join(""),  //使用默认信息窗体框样式，显示信息内容
            //         offset: new AMap.Pixel(0, -20)
            //     });
            //     marker.setMap(map);
            // }
            map.plugin('AMap.Geolocation', function() {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(60, 80),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    // zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition:'RB'
                });
                map.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
            });
            //解析定位结果
            function onComplete(data) {
                var str=['定位成功'];
                str.push('经度：' + data.position.getLng());
                str.push('纬度：' + data.position.getLat());
                if(data.accuracy){
                    str.push('精度：' + data.accuracy + ' 米');
                }//如为IP精确定位结果则没有精度信息
                str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
                document.getElementById('tip').innerHTML = str.join('<br>');
                // alert(str);
                // 添加我的位置点
                var mylnglat = new AMap.LngLat(data.position.getLng(), data.position.getLat());
                self.myPosition = mylnglat;
                var mymarker = new AMap.Marker({
                    map: map,
                    position: mylnglat
                });
                // mymarker.setMap(map);   
                map.setFitView();
                for (let i = 0; i < self.companys.length; i++) {
                    new AMap.Polyline({
                        map: map,
                        strokeColor: 'red',
                        path: [self.myPosition, self.companys[i].position]
                    })
                    var lnglat = new AMap.LngLat(self.companys[i].position[0], self.companys[i].position[1]);
                    if (lnglat) {
                        new AMap.Text({
                            text: '两点相距' + Math.round(mylnglat.distance(lnglat)) + '米',
                            position: mylnglat.divideBy(2).add(lnglat.divideBy(2)),
                            map: map,
                            style: {'background-color':'#ccccff',
                                    'border-color':'green',
                                    'font-size':'12px'}
                        })
                    }
                }
            }
            //解析定位错误信息
            function onError(data) {
                document.getElementById('tip').innerHTML = '定位失败';
            } 
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
#container {
    width: 375px;
    height: 667px;
}
</style>
