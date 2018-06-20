<template>
    <div v-show="show" class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <slot></slot>
    </div>
</template>
<script>
export default {
    // data: function () {
    //     return {
    //         ok: 'true'
    //     }
    // },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

