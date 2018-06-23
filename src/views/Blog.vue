<template>
    <div class="blog row">
        <div class="col-md-7 col-md-offset-1">main</div>
        <div class="col-md-3">aside<calendar /></div>
    </div>
</template>
<script>
import Calendar from '@/components/Calendar'
export default {
    components: { Calendar }
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
</style>

