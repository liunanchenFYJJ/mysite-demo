<template>
    <div>
        <h1 class="h3">Congratulations!</h1>
        <p class="text-success">{{time}}秒后跳转登陆页</p>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            time: 0
        }
    },
    created: function () {
        this.countdown();
    },
    methods: {
        countdown: function () {
            var self = this;            
            const Time = 5; //跳转登陆页时间
            self.time = Time;
            var myVar = setInterval(function () {
                // console.log(self.time);
                self.time -= 1;
                if (self.time == 0) {
                    clearInterval(myVar);
                    location.href = '/login';
                }
            }, 1000);
        }
    }
}
</script>

