<template>
    <div>
        <Cus-header />
        <router-view />
        <Sticky-footer />                   
    </div>
</template>

<script>
import CusHeader from '@/components/Cus-header'
import StickyFooter from '@/components/Sticky-footer'
export default {
    name: 'Layout',    
    components: { StickyFooter, CusHeader }
}
</script>

<style scoped>

</style>


