<template>
    <div>
        home
        <test v-bind:todos="todos">
            <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
            <template slot-scope="slotProps">
                <!-- 为待办项自定义一个模板，-->
                <!-- 通过 `slotProps` 定制每个待办项。-->
                <span v-if="slotProps.todo.isComplete">✓</span>
                {{ slotProps.todo.text }}
            </template>
        </test>

        <input type="text" v-model="a">
        <input type="text" v-model="b.name">
        <button style="marginTop: 100px" @click="getreq">get</button>
        <button style="marginTop: 100px" @click="websocket">ws</button>
        <!-- <main role="main" class="container">
            <div class="jumbotron">
                <h1>Navbar example</h1>
                <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                <a class="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
            </div>
        </main> -->
    </div>
</template>
<script>
import test from "@/components/test";
export default {
    components: {
        test
    },
    data: function () {
        return {
            a: 1,
            b: {
                name: 'json'
            },
            todos: [
                {id: 1, text: 'jj', isComplete: true},
                {id: 2, text: 'json', isComplete: false},
            ]
        }
    },
    watch: {
        a(value, oldvalue) {
            console.log('A:' + value + oldvalue);
        },
        newb(value, oldvalue) {
            console.log('c:' + value + oldvalue);
        }
    },
    computed: {
        newb() {
            return this.b.name;
        }
    },
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
            var url = 'http://localhost:3000/page/404';
            // url = this.addUrlParam(url, 'name', 'json');
            xhr.open('get', url, true);
            // 设置请求头信息request headers
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // xhr.overrideMimeType('text/xml');
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
        },
        addUrlParam: function (url, name, value) {
            url += (url.indexOf('?') == -1 ? '?' : '&');
            url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
            return url;
        },
        websocket: function () {
            var socket = new WebSocket('wss://echo.websocket.org');
            socket.open = function () {
                console.log('connection opened');                
            };
        }
    }
}
</script>

<style scoped>
div {
    margin: 100px
}
</style>

