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
            time: 10
        }
    },
    created: function () {
        this.countdown();
    },
    methods: {
        countdown: function () {
            var timer = setInterval(function () {
                this.time -= 1;
                if (this.time == 0) {
                    clearInterval(timer);                    
                }
            }, 1000);
            console.log('countdown');
        }
    }
}
</script>

