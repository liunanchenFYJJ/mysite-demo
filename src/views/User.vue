<template>
    <div>
        user /{{$route.params.name}}
        {{$route.query}}
        <button @click="log">log</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'User',
    data: function() {
        return {

        }
    },
    watch: {
        '$route' (to, from) {
            console.log(to);
            console.log(from);
        }
    },
    // beforeRouteUpdate (to, from, next) {
    //     console.log(to);
    //     console.log(from);
    //     next();
    // },
    methods: {
        log: function() {
            console.log(this.$route);
        }
    }
}
</script>
