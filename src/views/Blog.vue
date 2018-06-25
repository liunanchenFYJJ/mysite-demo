<template>
    <div class="blog row">
        <div class="col-md-10">main</div>
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
import Bus from '@/bus'
export default {
    components: { Calendar },
    data: function () {
        return {
            selectmsg: ['ads']
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
        }
    }
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

