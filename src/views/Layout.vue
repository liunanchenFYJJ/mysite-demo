<template>
    <div>
        <Cus-nav />
        <!-- <Carousel /> -->
        <router-view />
        <router-view name="custom"/>
        <button style="marginTop: 100px" @click="getreq">get</button>
        <Sticky-footer />                   
    </div>
</template>

<script>
import CusNav from '@/components/Cus-nav'
import Carousel from '@/components/Carousel'
import StickyFooter from '@/components/Sticky-footer'
export default {
    name: 'Layout',    
    components: { StickyFooter, CusNav, Carousel },
    methods: {
        getreq: function() {
            console.log('come');
            // $.get('http://localhost:3000', {}, function(e) {
            //     console.log(e.data);
            // });
            // vueresource!
            // this.$http.get('https://api.douban.com//v2/movie/top250').then((response) => {
            //     this.movie = response.data;
            //     console.log(this.movie); 
            // });
            var url = 'http://localhost:3000';
            $.ajax(url, {
                type: "GET",
                // contentType:"application/json; charset=utf-8",  //  ---->  问题就在这里了
                // data: JSON.stringify(ajaxPostData),
                // dataType:"json",
                data: {},
                jsonp: "callback",
                jsonpCallback:"success",
                dataType: 'jsonp',
                // crossDomain: true,
                success: function(data) {
                    console.log(data);
                },
                error: function(data){
                    console.log('error');
                } 
            });
        }  
    }
}
</script>

<style scoped>

</style>


