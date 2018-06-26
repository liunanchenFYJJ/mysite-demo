<template>
    <div>
        <div id="timeline"></div>
        <button @click="add">add</button>        
    </div>
</template>
<script>
import d3KitTimeline from 'd3kit-timeline'
export default {
    data: function () {
        return {
            data: [
                // {time: new Date(1977, 4,25), episode: 4, name: 'A New Hope'},
                // {time: new Date(1980, 4,17), episode: 5, name: 'The Empire Strikes Back'},
                // {time: new Date(1984, 4,25), episode: 6, name: 'Return of the Jedi'},
                // {time: new Date(1999, 4,19), episode: 1, name: 'The Phantom Menace'},
                // {time: new Date(2002, 4,16), episode: 2, name: 'Attack of the Clones'},
                // {time: new Date(2005, 4,19), episode: 3, name: 'Revenge of the Sith'},
                {time: new Date(2014,11,18), episode: 7, name: 'The Force Awakens'},
                {time: new Date(2015,1,18), episode: 7, name: 'The Force Awakens'},
                {time: new Date(2015,6,18), episode: 7, name: 'The Force Awakens'},
                {time: new Date(2015,11,19), episode: 7, name: 'The Force Awakens'},
            ],
            chart: {}
        }
    },
    mounted: function () {
        this.timeline();
    },
    methods: {
        timeline: function () {
            this.chart = new d3KitTimeline('#timeline', {
                direction: 'right',    //标签方向
                // initialWidth: 400,
                // initialHeight: 250,
                // formatAxis: axis => axis.ticks(0),  //设置轴线分割点数
                textFn: function(d){
                    return d.time.getFullYear() + ' - ' + d.name;
                },
                dotColor: 'red',        //标签点颜色
                labelBgColor: 'grey',    //标签背景色
                labelTextColor: '#fff',  //标签文字颜色
                linkColor: 'red',       //标签线颜色
                labelPadding: {left: 10, right: 10, top: 2, bottom: 2}
            });

            this.chart.data(this.data);
            this.chart.on('labelClick', function(d){
                console.log(d.data.name)
            });
        },
        add: function () {
            this.data.push({time: new Date(Math.random()*8+2010,11,18), episode: 7, name: 'XXXX '});
            this.chart.data(this.data);
        }
    }
}
</script>

