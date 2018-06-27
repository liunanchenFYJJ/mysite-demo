<template>
    <div class="blog row">
        <div class="col-md-4">
            <timeline />
        </div>
        <div id="scroll" @scroll="scrollToTop" class="col-md-6" style="overflow:auto">
            <cus-details  v-for="(item,index) in data" :obj="item" :key="index"/>
            <a v-show="show" id="top" @click="backtop"><span class="glyphicon glyphicon-arrow-up"></span></a>
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
import Timeline from '@/components/Timeline'
import CusDetails from '@/components/Cus-details'
import Bus from '@/bus'
export default {
    components: { Calendar, Timeline, CusDetails },
    data: function () {
        return {
            selectmsg: ['ads'],
            show: false,
            demo: {time: new Date(2018,6,11), episode: 1, name: 'The Force Awakens1'},
            data: [
                // {time: new Date(1977, 4,25), episode: 4, name: 'A New Hope'},
                // {time: new Date(1980, 4,17), episode: 5, name: 'The Empire Strikes Back'},
                // {time: new Date(1984, 4,25), episode: 6, name: 'Return of the Jedi'},
                // {time: new Date(1999, 4,19), episode: 1, name: 'The Phantom Menace'},{time: new Date(1977, 4,25), episode: 4, name: 'A New Hope'},
                {time: new Date(1980, 4,17), episode: 5, name: 'The Empire Strikes Back'},
                {time: new Date(1984, 4,25), episode: 6, name: 'Return of the Jedi'},
                {time: new Date(1999, 4,19), episode: 1, name: 'The Phantom Menace'},
                {time: new Date(2002, 4,16), episode: 2, name: 'Attack of the Clones'},
                {time: new Date(2005, 4,19), episode: 3, name: 'Revenge of the Sith'},
                {time: new Date(2018,6,11), episode: 1, name: 'The Force Awakens1'},
                {time: new Date(2018,6,20), episode: 2, name: 'The Force Awakens2'},
                {time: new Date(2018,6,16), episode: 3, name: 'The Force Awakens3'},
                {time: new Date(2018,6,19), episode: 4, name: 'The Force Awakens4'},
            ]
        }
    },
    mounted: function () {
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
        scrollToTop: function () {    // 是否显示回到顶部箭头
            var t = document.getElementById('scroll').scrollTop;
            // console.log(t);
            if (t > 50) {
                this.show = true;
            } else {
                this.show = false;
            }
        },
        backtop: function () {
            // document.getElementById('scroll').scrollTop = 0;    // js 回到顶部
            $('#scroll').scrollTop(0);                             // jQuery写法
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
#top {
    position: fixed;
    bottom: 80px;
    right: 400px;
    z-index: 100;
    /* overflow:hidden; */
    border:1px solid #c00;
    background: darkgrey;
    visibility: visible;
    opacity: 1;
    cursor: pointer;
}
</style>

