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
            markerList: [],
            info: [],
            mymarker: null            
        }
    },
    mounted: function () {
        this.createGDMap();
        setInterval(() => {     //每隔10秒获取一次新位置
            this.mymarker = null;
            this.getMyposition();
        }, 1000);
        this.markersInfo();
        this.addMarkers();
    },
    methods: {
        createGDMap: function () {
            var self = this;
            self.map = new AMap.Map('container');
            self.map.plugin(["AMap.ToolBar"], function () {
                var tool = new AMap.ToolBar();  //加载工具条
                self.map.addControl(tool);    
            });
        },
        addMarkers: function () {
            var self = this;
            self.map.clearMap();  // 清除地图覆盖物
            var infoWindow = [];            
            for (let i = 0; i < self.companys.length; i++) {
                self.markerList[i] = new AMap.Marker({
                    icon: new AMap.Icon({            
                        size: new AMap.Size(32, 40),  //图标大小
                        image: "http://hw-iot.com:8020/static/img/map/factory.png",
                        imageOffset: new AMap.Pixel(-4, -3),
                        imageSize: new AMap.Size(32, 37)
                    }),
                    position: new AMap.LngLat(self.companys[i].position[0], self.companys[i].position[1]),
                });
                // self.markerList[i].setMap(self.map);
                infoWindow[i] = new AMap.InfoWindow({
                    content: self.info[i],  //使用默认信息窗体框样式，显示信息内容
                    offset: new AMap.Pixel(0, -20)
                });
                AMap.event.addListener(self.markerList[i], 'click', function() {
                    infoWindow[i].open(self.map, self.markerList[i].getPosition());
                });
            }
            self.map.add(self.markerList);
            self.map.setFitView();            
        },
        markersInfo: function () {
            //构建信息窗体中显示的内容
            var self = this;
            for (let i = 0; i < self.companys.length; i++) {
                self.info[i] = ("<div><div><img style=\"float:left;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div><br/>");
                self.info[i] += ("<div style=\"padding:0px 0px 0px 4px;\"><b>");
                self.info[i] += (self.companys[i].cname);
                self.info[i] += ("</b><br/>电话 : 010-84107000   邮编 : 100102<br/>");
                self.info[i] += ("</div></div>");
            }
        },
        getMyposition: function () {
            var self = this;
            self.map.plugin('AMap.Geolocation', function() {
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
                    // self.map.remove(self.mymarker);
                    var str=['定位成功'];
                    str.push('经度：' + data.position.getLng());
                    str.push('纬度：' + data.position.getLat());
                    if(data.accuracy){
                        str.push('精度：' + data.accuracy + ' 米');
                    }//如为IP精确定位结果则没有精度信息
                    str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
                    document.getElementById('tip').innerHTML = str.join('<br>');
                    console.log('success');
                    var mylnglat = new AMap.LngLat(data.position.getLng(), data.position.getLat());
                    self.myPosition = mylnglat;
                    self.mymarker = new AMap.Marker({
                        map: self.map,
                        position: mylnglat
                    });
                    console.log(mylnglat.getLng());
                    for (let i = 0; i < self.companys.length; i++) {
                        new AMap.Polyline({
                            map: self.map,
                            strokeColor: 'red',
                            path: [self.myPosition, self.companys[i].position]
                        })
                        var lnglat = new AMap.LngLat(self.companys[i].position[0], self.companys[i].position[1]);
                        if (lnglat) {
                            new AMap.Text({
                                text: '两点相距' + Math.round(mylnglat.distance(lnglat)) + '米',
                                position: mylnglat.divideBy(2).add(lnglat.divideBy(2)),
                                map: self.map,
                                style: {'background-color':'#ccccff',
                                        'border-color':'green',
                                        'font-size':'12px'}
                            })
                        }
                    }                    
                }

                function onError (data) {
                    console.log('error');
                    document.getElementById('tip').innerHTML = '定位失败';                    
                }
            })
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
