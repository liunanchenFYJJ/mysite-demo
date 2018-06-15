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
            // ajax async request            
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        console.log(xhr.responseText);
                    } else {
                        console.log('request was unsuccessful' + xhr.status);
                    }
                }
            }
            xhr.open('get', 'http://localhost:8080', true);
            xhr.send(null);

            // $.get('http://localhost:8080', {}, function(data, textStatus) {
            //     console.log(data);
            //     console.log(textStatus);
            // });
            // $.ajax({
            //     url: 'http://localhost:3000',
            //     type: 'GET',
            //     data: {},
            //     dataType: "jsonp",
            //     // crossDomain: true,
            //     jsonpCallback: "sucCallback",
            //     success: function(data, textStatus) {
            //         console.log(data);
            //         console.log(textStatus);
            //     }
            // });
            // vueresource!
            // this.$http.get('https://api.douban.com//v2/movie/top250').then((response) => {
            //     this.movie = response.data;
            //     console.log(this.movie); 
            // });
            // axios.get('/user?ID=12345')
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        }  
    }
}
</script>

<style scoped>

</style>


