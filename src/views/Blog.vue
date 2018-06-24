<template>
    <div class="blog row">
        <div class="col-md-7 col-md-offset-1">main</div>
        <div class="col-md-3">
            <calendar />
            <i class="glyphicon glyphicon-search"></i>
            <a @click="search" href="/tonowhere" class="h4">search for blog</a>
        </div>
    </div>
</template>
<script>
import Calendar from '@/components/Calendar'
export default {
    components: { Calendar },
    data: function () {
        return {
            
        }
    },
    methods: {
        search: function (e) {
            e.preventDefault();
            console.log('search');
        }
    }
}
</script>

<style scoped>
.blog {
    /* width: 100%; */
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

