<template>
    <div class="blog row">
        <div class="col-md-10">main
            <div id="timeline"></div>
            <button @click="add">add</button>
        </div>
        <div class="col-md-2">
            <calendar />
        {{selectmsg}}
            <i class="glyphicon glyphicon-search"></i>
            <a @click="search" href="/tonowhere" class="h4">search for blog</a>
        </div>
    </div>
</template>
<script>
import Calendar from '@/components/Calendar'
import d3KitTimeline from 'd3kit-timeline'
import Bus from '@/bus'
export default {
    components: { Calendar },
    data: function () {
        return {
            selectmsg: ['ads'],
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
        Bus.$on('msg', function (data) {
            var self = this;
            self.selectmsg = data;
            console.log(self.selectmsg);
        });
    },
    // watch: {
    //     selectmsg: function (nv, ov) {
    //         console.log(nv)
    //     }
    // },
    methods: {
        search: function (e) {
            e.preventDefault();
            var self = this;            
            console.log(self.selectmsg);
        },
        timeline: function () {
            this.chart = new d3KitTimeline('#timeline', {
                // direction: 'up',    //标签方向
                // initialWidth: 400,
                // initialHeight: 250,
                formatAxis: axis => axis.ticks(0),  //设置轴线分割点数
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
            this.data.push({time: new Date(Math.random()*100+1900,11,18), episode: 7, name: 'XXXX '});
            this.chart.data(this.data);
        }
    },
    // beforeCreate: function(){console.log('beforeCreate')},
    // created: function(){console.log('Create')},
    // beforeMount: function(){console.log('beforeMount')},
    // mounted: function(){console.log('Mount')},
    // beforeUpdate: function(){console.log('beforeUpdate')},
    // updated: function(){console.log('Update')},
    // beforeDestroy: function(){console.log('beforeDestroy')},
    // destroyed: function(){console.log('Destroy')}
}
</script>

<style scoped>
.blog {
    width: 100%;
    height: inherit;
    padding: 60px 0 60px 0;
}
.blog > div {
    height: inherit;
}
a {
    font-family: 'Times New Roman', Times, serif;    
}
a:link {
    color: greenyellow;
}
a:visited {
    color: brown;
}
a:hover {
    text-decoration-line: none;
    color: blueviolet;
}
a:active {
    color: aqua;
}
</style>

